import { useEffect, useRef } from "react";

const TAU = Math.PI * 2;
const DEG = Math.PI / 180;

function rotXYZ(p: { x: number; y: number; z: number }, ax: number, ay: number) {
  const cy = Math.cos(ay), sy = Math.sin(ay);
  const cx = Math.cos(ax), sx = Math.sin(ax);
  let x = p.x * cy + p.z * sy;
  let z = -p.x * sy + p.z * cy;
  let y = p.y;
  const yy = y * cx - z * sx;
  const zz = y * sx + z * cx;
  return { x, y: yy, z: zz };
}
function project(p: { x: number; y: number; z: number }, cx: number, cy: number, R: number) { return { sx: cx + p.x * R, sy: cy - p.y * R }; }
function slerp(a: { x: number; y: number; z: number }, b: { x: number; y: number; z: number }, t: number) {
  const dot = Math.max(-1, Math.min(1, a.x*b.x + a.y*b.y + a.z*b.z));
  const om = Math.acos(dot);
  if (om < 1e-6) return { ...a };
  const s = Math.sin(om);
  const k0 = Math.sin((1-t)*om)/s, k1 = Math.sin(t*om)/s;
  return { x: a.x*k0+b.x*k1, y: a.y*k0+b.y*k1, z: a.z*k0+b.z*k1 };
}

function isLand(lat: number, lon: number) {
  lon = ((lon + 540) % 360) - 180;
  const blobs = [
    [55,-100,22,36,1.0],[45,-85,14,22,1.0],[32,-100,10,18,0.9],
    [60,-150,14,22,1.0],[70,-90,10,35,0.8],[35,-118,8,8,0.9],
    [15,-90,6,10,0.9],[18,-75,3,10,0.6],
    [-5,-60,18,14,1.0],[-25,-60,14,12,1.0],[-40,-68,10,6,1.0],[10,-65,6,8,0.85],
    [73,-40,10,16,1.0],
    [50,10,12,22,1.0],[60,20,10,18,0.95],[42,15,8,18,0.95],
    [54,-3,5,5,0.9],[64,-18,3,4,0.9],[40,-4,5,6,0.9],
    [65,60,12,35,0.95],[60,100,14,45,1.0],[70,130,10,35,0.9],
    [10,20,18,22,1.0],[-15,25,16,18,1.0],[-30,22,8,10,0.95],[-20,47,6,3,0.9],[5,30,8,14,0.95],
    [25,45,12,16,0.95],[32,38,6,8,0.9],
    [22,78,12,14,1.0],[28,82,8,16,1.0],[15,77,8,8,0.95],
    [10,105,6,10,0.85],[-3,118,6,14,0.75],[-6,140,6,10,0.75],[13,121,4,4,0.8],
    [35,105,14,28,1.0],[40,120,10,16,1.0],[37,138,6,6,0.9],[37,128,4,4,0.8],[24,114,5,8,0.9],
    [-25,134,12,20,1.0],[-42,172,4,6,0.9],
    [-78,0,8,180,0.8]
  ];
  let v = -1;
  for (let i = 0; i < blobs.length; i++) {
    const [cLat,cLon,rLat,rLon,w] = blobs[i];
    const dLat = (lat-cLat)/rLat;
    let dLon = lon-cLon;
    if (dLon>180) dLon-=360; if (dLon<-180) dLon+=360;
    dLon /= rLon;
    const c = w * (1 - (dLat*dLat + dLon*dLon));
    if (c > v) v = c;
  }
  const n = Math.sin(lat*0.7)*Math.cos(lon*0.5)*0.10
          + Math.sin(lat*1.6+1.2)*Math.sin(lon*1.1)*0.07;
  return v + n > 0;
}

const HUBS = [
  { reg: "New York, USA",      lat: 40.71, lon: -74.01 },
  { reg: "California, USA",    lat: 37.77, lon: -122.42 },
  { reg: "Ontario, Canada",    lat: 43.65, lon: -79.38 },
  { reg: "Mexico",             lat: 19.43, lon: -99.13 },
  { reg: "Brazil",             lat: -23.55, lon: -46.63 },
  { reg: "United Kingdom",     lat: 51.51, lon: -0.13 },
  { reg: "France",             lat: 48.86, lon: 2.35 },
  { reg: "Germany",            lat: 52.52, lon: 13.40 },
  { reg: "UAE",                lat: 25.20, lon: 55.27 },
  { reg: "Israel",             lat: 32.08, lon: 34.78 },
  { reg: "Maharashtra, India", lat: 19.08, lon: 72.88 },
  { reg: "Karnataka, India",   lat: 12.97, lon: 77.59 },
  { reg: "Singapore",          lat: 1.35,  lon: 103.82 },
  { reg: "Indonesia",          lat: -6.21, lon: 106.85 },
  { reg: "Hong Kong",          lat: 22.32, lon: 114.17 },
  { reg: "China",              lat: 31.23, lon: 121.47 },
  { reg: "South Korea",        lat: 37.57, lon: 126.98 },
  { reg: "Japan",              lat: 35.68, lon: 139.65 },
  { reg: "NSW, Australia",     lat: -33.87, lon: 151.21 },
  { reg: "South Africa",       lat: -33.92, lon: 18.42 },
  { reg: "Nigeria",            lat: 6.52,  lon: 3.38 },
  { reg: "Kenya",              lat: -1.29, lon: 36.82 }
].map(c => {
  const phi = (90-c.lat)*DEG, lam = c.lon*DEG;
  return { ...c, x: Math.sin(phi)*Math.cos(lam), y: Math.cos(phi), z: Math.sin(phi)*Math.sin(lam) };
});

interface GlobeProps {
  accent?: string;
  mesh?: string;
  spinSpeed?: number;
  routeCount?: number;
  labels?: boolean;
  meshOpacity?: number;
  arcOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function Globe({
  accent = "#c0ff33",
  mesh = "#6fb8ff",
  spinSpeed = 0.18,
  routeCount = 26,
  labels = true,
  meshOpacity = 1.0,
  arcOpacity = 1.0,
  className,
  style
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Procedural continent dot field
    const continentDots: { x: number; y: number; z: number }[] = [];
    const N = 24000;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i/(N-1))*2;
      const r2 = Math.sqrt(1 - y*y);
      const th = golden*i;
      const x = Math.cos(th)*r2, z = Math.sin(th)*r2;
      const lat = Math.asin(y)*180/Math.PI;
      const lon = Math.atan2(z,x)*180/Math.PI;
      if (isLand(lat, lon)) continentDots.push({ x, y, z });
    }

    interface Route {
      a: number;
      b: number;
      life: number;
      maxLife: number;
      speed: number;
      height: number;
      phase: number;
    }

    let routes: Route[] = [];
    function rebuild(n: number) {
      routes = [];
      for (let i = 0; i < n; i++) {
        const a = (Math.random()*HUBS.length)|0;
        let b = (Math.random()*HUBS.length)|0;
        if (b === a) b = (b+1)%HUBS.length;
        const va = HUBS[a], vb = HUBS[b];
        const arc = Math.acos(Math.max(-1, Math.min(1, va.x*vb.x+va.y*vb.y+va.z*vb.z)));
        if (arc < 0.4) { i--; continue; }
        routes.push({ a, b, life: 0,
          maxLife: 4 + Math.random()*5,
          speed: 0.06 + Math.random()*0.10,
          height: 0.10 + arc*0.16,
          phase: Math.random() });
      }
    }
    rebuild(routeCount);

    let yaw = 0, pitch = -0.30;
    let raf = 0, lastT = performance.now();
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    function resize() {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;
      
      yaw += deltaX * 0.005;
      pitch -= deltaY * 0.005;
      pitch = Math.max(-1.5, Math.min(1.5, pitch));

      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDragging = true;
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length === 0) return;
      const deltaX = e.touches[0].clientX - previousMouseX;
      const deltaY = e.touches[0].clientY - previousMouseY;
      
      yaw += deltaX * 0.005;
      pitch -= deltaY * 0.005;
      pitch = Math.max(-1.5, Math.min(1.5, pitch));

      previousMouseX = e.touches[0].clientX;
      previousMouseY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    function draw(t: number) {
      if (!canvas || !ctx) return;
      const dt = Math.min(0.05, (t - lastT) / 1000);
      lastT = t;
      const facingLon = ((-yaw*180/Math.PI)%360+540)%360-180;
      const dist = Math.min(180, Math.abs(((facingLon+10+540)%360)-180));
      const inRich = dist < 110;
      const speedFactor = inRich ? 0.35 + 0.65 * (dist/110) : 1.4;
      
      if (!isDragging) {
        yaw += spinSpeed * dt * speedFactor;
      }

      const r = canvas.getBoundingClientRect();
      const cx = r.width/2, cy = r.height/2;
      const R = Math.min(r.width, r.height) * 0.46;

      ctx.clearRect(0, 0, r.width, r.height);

      // Tight inner-edge atmosphere (no big outer ring)
      const halo = ctx.createRadialGradient(cx, cy, R*0.92, cx, cy, R*1.06);
      halo.addColorStop(0, "rgba(80,160,255,0)");
      halo.addColorStop(0.5, "rgba(80,160,255,0.10)");
      halo.addColorStop(1, "rgba(80,160,255,0)");
      ctx.fillStyle = halo;
      ctx.beginPath(); ctx.arc(cx, cy, R*1.06, 0, TAU); ctx.fill();

      // Sphere body
      const body = ctx.createRadialGradient(cx-R*0.3, cy-R*0.3, R*0.15, cx, cy, R);
      body.addColorStop(0, "rgba(28,42,90,0.55)");
      body.addColorStop(0.7, "rgba(10,18,48,0.85)");
      body.addColorStop(1, "rgba(4,8,28,0.92)");
      ctx.fillStyle = body;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fill();

      // Lat/lon grid
      ctx.lineCap = "round";
      const drawArc = (lats: number[], lons: number, lonStep: number | null, latStep: number | null, isParallel: boolean) => {
        ctx.beginPath();
        let started = false;
        for (let v = lats[0]; v <= lats[1]; v += isParallel ? 4 : 3) {
          const lat = isParallel ? lons : v;
          const lon = isParallel ? v    : lons;
          const phi = (90-lat)*DEG, lam = lon*DEG;
          const p = rotXYZ({ x: Math.sin(phi)*Math.cos(lam), y: Math.cos(phi), z: Math.sin(phi)*Math.sin(lam) }, pitch, yaw);
          if (p.z < -0.02) { started = false; continue; }
          const pr = project(p, cx, cy, R);
          if (!started) { ctx.moveTo(pr.sx, pr.sy); started = true; }
          else ctx.lineTo(pr.sx, pr.sy);
        }
        ctx.strokeStyle = mesh;
        ctx.globalAlpha = 0.22 * meshOpacity;
        ctx.lineWidth = R * 0.0022;
        ctx.stroke();
      };
      for (let lat = -75; lat <= 75; lat += 15) drawArc([-180,180], lat, 4, null, true);
      for (let lon = -180; lon < 180; lon += 20) drawArc([-90,90], lon, null, 3, false);
      ctx.globalAlpha = 1;

      // Continents — additive bright dots
      const coreSize = Math.max(1.4, R*0.0050);
      const haloSize = coreSize * 2.2;
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < continentDots.length; i++) {
        const p = rotXYZ(continentDots[i], pitch, yaw);
        if (p.z < -0.02) continue;
        const pr = project(p, cx, cy, R);
        const fade = Math.max(0, Math.min(1, (p.z+0.05)*1.5));
        ctx.fillStyle = `rgba(120,200,255,${0.22*fade})`;
        ctx.fillRect(pr.sx-haloSize/2, pr.sy-haloSize/2, haloSize, haloSize);
        ctx.fillStyle = `rgba(225,245,255,${0.95*fade})`;
        ctx.fillRect(pr.sx-coreSize/2, pr.sy-coreSize/2, coreSize, coreSize);
      }
      ctx.globalCompositeOperation = "source-over";

      // Travelling arcs
      for (let i = 0; i < routes.length; i++) {
        const rt = routes[i];
        rt.life += dt * rt.speed * 1.5;
        if (rt.life > rt.maxLife) {
          const a = (Math.random()*HUBS.length)|0;
          let b = (Math.random()*HUBS.length)|0;
          if (b === a) b = (b+1)%HUBS.length;
          rt.a=a; rt.b=b; rt.life=0;
          rt.maxLife = 4 + Math.random()*5;
          continue;
        }
        const a = HUBS[rt.a], b = HUBS[rt.b];
        const mid = slerp(a, b, 0.5);
        const midR = rotXYZ(mid, pitch, yaw);
        if (midR.z < -0.05) continue;

        const segs = 48, pts = [];
        for (let s = 0; s <= segs; s++) {
          const u = s/segs;
          const sl = slerp(a, b, u);
          const lift = 1 + rt.height * Math.sin(u*Math.PI);
          pts.push(rotXYZ({ x: sl.x*lift, y: sl.y*lift, z: sl.z*lift }, pitch, yaw));
        }
        const lifeT = Math.min(1, rt.life/0.6);
        const fadeOut = rt.life > rt.maxLife - 1 ? Math.max(0, rt.maxLife - rt.life) : 1;
        const alpha = lifeT*fadeOut*arcOpacity;

        ctx.strokeStyle = accent;
        ctx.globalAlpha = alpha*0.22;
        ctx.lineWidth = R*0.013;
        ctx.beginPath();
        for (let s = 0; s < pts.length; s++) {
          const pr = project(pts[s], cx, cy, R);
          if (s === 0) ctx.moveTo(pr.sx, pr.sy); else ctx.lineTo(pr.sx, pr.sy);
        }
        ctx.stroke();
        ctx.globalAlpha = alpha;
        ctx.lineWidth = R*0.0024;
        ctx.stroke();

        const headU = (rt.life*0.4 + rt.phase) % 1;
        const idx = Math.min(pts.length-1, Math.floor(headU*pts.length));
        const hpr = project(pts[idx], cx, cy, R);
        const hg = ctx.createRadialGradient(hpr.sx, hpr.sy, 0, hpr.sx, hpr.sy, R*0.024);
        hg.addColorStop(0, accent);
        hg.addColorStop(1, "rgba(57,255,138,0)");
        ctx.fillStyle = hg;
        ctx.globalAlpha = alpha;
        ctx.beginPath(); ctx.arc(hpr.sx, hpr.sy, R*0.024, 0, TAU); ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Hub pulses + labels
      const tNow = t * 0.001;
      for (let i = 0; i < HUBS.length; i++) {
        const p = rotXYZ(HUBS[i], pitch, yaw);
        if (p.z < 0.02) continue;
        const pr = project(p, cx, cy, R);
        const fade = Math.min(1, (p.z-0.02)*2.0);
        const phase = (tNow*0.6 + i*0.37) % 1;
        ctx.strokeStyle = accent;
        ctx.globalAlpha = (1-phase)*0.55*fade;
        ctx.lineWidth = R*0.0024;
        ctx.beginPath(); ctx.arc(pr.sx, pr.sy, R*(0.012+phase*0.05), 0, TAU); ctx.stroke();
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.95*fade;
        ctx.beginPath(); ctx.arc(pr.sx, pr.sy, R*0.0058, 0, TAU); ctx.fill();
        if (labels && fade > 0.5) {
          const fs = Math.max(11, R*0.020);
          ctx.font = `600 ${fs}px Inter, system-ui, sans-serif`;
          ctx.shadowColor = "rgba(0,0,0,0.85)";
          ctx.shadowBlur = 6;
          ctx.fillStyle = accent;
          ctx.globalAlpha = 0.95*fade;
          ctx.fillText(HUBS[i].reg, pr.sx + R*0.014, pr.sy + R*0.004);
          ctx.shadowBlur = 0;
        }
      }
      ctx.globalAlpha = 1;

      // Atmosphere rim
      const rim = ctx.createRadialGradient(cx, cy, R*0.96, cx, cy, R*1.05);
      rim.addColorStop(0, "rgba(120,180,255,0)");
      rim.addColorStop(0.6, "rgba(120,180,255,0.28)");
      rim.addColorStop(1, "rgba(120,180,255,0)");
      ctx.fillStyle = rim;
      ctx.beginPath(); ctx.arc(cx, cy, R*1.05, 0, TAU); ctx.fill();

      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => { 
      cancelAnimationFrame(raf); 
      ro.disconnect(); 
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [accent, mesh, spinSpeed, routeCount, labels, meshOpacity, arcOpacity]);

  return (
    <div className={className} style={{ width: "100%", height: "100%", ...style }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block", background: "transparent" }}
      />
    </div>
  );
}
