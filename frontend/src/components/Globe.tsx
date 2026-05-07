import React, { useEffect, useRef, useState, useMemo } from 'react';
import GlobeGl from 'react-globe.gl';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export const Globe = () => {
  const globeRef = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  // Generate premium tech arcs
  const arcsData = useMemo(() => [...Array(25).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 160,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 160,
    endLng: (Math.random() - 0.5) * 360,
    color: ['#004ab0', '#c0ff33', '#ffffff'][Math.floor(Math.random() * 3)],
    stroke: Math.random() * 0.4 + 0.1
  })), []);

  const pointsData = useMemo(() => [...Array(50).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() * 0.4 + 0.1,
    color: '#c0ff33'
  })), []);

  const labelsData = useMemo(() => [
    { lat: 40.71, lng: -74, name: "USA", size: 0.8 },
    { lat: 34.05, lng: -118, name: "CAN", size: 0.6 },
    { lat: 51.5, lng: -0.12, name: "UK", size: 0.7 },
    { lat: 48.85, lng: 2.35, name: "FRA", size: 0.6 },
    { lat: 52.52, lng: 13.4, name: "GER", size: 0.7 },
    { lat: 35.67, lng: 139.65, name: "JPN", size: 0.8 },
    { lat: 28.61, lng: 77.2, name: "IND", size: 0.8 },
    { lat: 31.23, lng: 121.47, name: "CHN", size: 0.8 },
    { lat: -33.86, lng: 151.2, name: "AUS", size: 0.7 },
    { lat: -23.55, lng: -46.63, name: "BRA", size: 0.7 },
    { lat: 25.2, lng: 55.27, name: "UAE", size: 0.6 },
    { lat: 1.35, lng: 103.81, name: "SGP", size: 0.6 },
    { lat: 55.75, lng: 37.61, name: "RUS", size: 0.7 },
    { lat: -26.2, lng: 28.04, name: "ZAF", size: 0.6 },
    { lat: 19.43, lng: -99.13, name: "MEX", size: 0.6 },
    { lat: 30.04, lng: 31.23, name: "EGY", size: 0.6 },
    { lat: 39.9, lng: 116.4, name: "KOR", size: 0.7 },
    { lat: -34.6, lng: -58.38, name: "ARG", size: 0.6 },
    { lat: 59.32, lng: 18.06, name: "SWE", size: 0.6 },
    { lat: 60.16, lng: 24.93, name: "FIN", size: 0.6 },
    { lat: 37.56, lng: 126.97, name: "KOR", size: 0.6 },
    { lat: 14.59, lng: 120.98, name: "PHL", size: 0.6 },
    { lat: -6.2, lng: 106.84, name: "IDN", size: 0.6 },
    { lat: 41.9, lng: 12.49, name: "ITA", size: 0.6 },
    { lat: 40.41, lng: -3.7, name: "ESP", size: 0.6 },
    { lat: 1.29, lng: 103.85, name: "SGP", size: 0.7 },
    { lat: -33.92, lng: 18.42, name: "CPT", size: 0.6 },
    { lat: 35.68, lng: 139.76, name: "TYO", size: 0.8 },
    { lat: 19.07, lng: 72.87, name: "BOM", size: 0.6 },
    { lat: 31.2, lng: 121.4, name: "SHA", size: 0.6 },
    { lat: 37.77, lng: -122.41, name: "SFO", size: 0.7 },
    { lat: 55.75, lng: 37.61, name: "MOW", size: 0.6 },
    { lat: -22.9, lng: -43.17, name: "RIO", size: 0.6 },
    { lat: 30.04, lng: 31.23, name: "CAI", size: 0.6 },
    { lat: 25.03, lng: 121.56, name: "TPE", size: 0.6 },
    { lat: 22.39, lng: 114.1, name: "HKG", size: 0.7 },
    { lat: 52.36, lng: 4.89, name: "AMS", size: 0.6 },
    { lat: 45.42, lng: -75.69, name: "OTT", size: 0.6 },
    { lat: -1.29, lng: 36.82, name: "NBO", size: 0.6 },
    { lat: 6.52, lng: 3.37, name: "LOS", size: 0.6 },
    { lat: 39.9, lng: 116.4, name: "PEK", size: 0.6 },
    { lat: 43.65, lng: -79.38, name: "TOR", size: 0.6 },
  ], []);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (globeRef.current && globeRef.current.scene) {
      // Amplified tilt and rotation based on mouse position
      const scene = globeRef.current.scene();
      if (scene) {
        scene.rotation.y = mousePos.x * 0.25; // Increased response
        scene.rotation.x = -mousePos.y * 0.15;
      }
    }
  }, [mousePos]);

  useEffect(() => {
    const updateDimensions = () => {
      // Responsive sizing - more conservative to avoid text overlap
      const width = window.innerWidth;
      let size = 600;
      
      if (width < 640) size = width * 0.8;
      else if (width < 1024) size = 350; // Smaller on tablets to avoid overlap
      else if (width < 1280) size = 450; // Medium desktop
      else if (width < 1536) size = 550; // Large desktop
      else size = 650; // Ultra wide

      setDimensions({ width: size, height: size });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    if (globeRef.current) {
      // Ensure methods exist before calling (sometimes init takes a moment)
      const initGlobe = () => {
        if (globeRef.current.controls) {
          const controls = globeRef.current.controls();
          controls.autoRotate = true;
          controls.autoRotateSpeed = 1.2; // Increased speed for dynamic feel
          controls.enableZoom = false;
          controls.enablePan = false;
          controls.rotateSpeed = 0.8;
          controls.enableDamping = true;
          controls.dampingFactor = 0.05;
        }

        if (globeRef.current.globeMaterial) {
          const globeMaterial = globeRef.current.globeMaterial();
          globeMaterial.color = new THREE.Color('#001a3d');
          globeMaterial.emissive = new THREE.Color('#004ab0');
          globeMaterial.emissiveIntensity = 0.4; // Significantly higher for land visibility
          globeMaterial.shininess = 1.0;
        }
      };

      // Try immediately and again after a short delay to ensure Three.js is ready
      initGlobe();
      const timeout = setTimeout(initGlobe, 100);
      return () => clearTimeout(timeout);
    }

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -25, 0],
        rotateZ: [0, 2, 0, -2, 0]
      }}
      transition={{ 
        opacity: { duration: 1.5, delay: 0.5 },
        scale: { duration: 1.5, delay: 0.5 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotateZ: { duration: 10, repeat: Infinity, ease: "easeInOut" }
      }}
      className="relative w-full h-full flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
    >
      {/* Cinematic Rim Lighting / Atmosphere Glow */}
      <div className="absolute inset-0 z-0 bg-blue-500/20 rounded-full blur-[160px] scale-90 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[#c0ff33]/5 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      
      <GlobeGl
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        
        showGraticules={true}
        graticulesColor="rgba(255, 255, 255, 0.05)"
        
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.6}
        arcDashGap={2}
        arcDashAnimateTime={1000}
        arcStroke={0.5}
        
        pointsData={pointsData}
        pointColor="color"
        pointRadius="size"
        pointAltitude={0.01}
        
        atmosphereColor="#3a86ff"
        atmosphereAltitude={0.3}

        labelsData={labelsData}
        labelText={(d: any) => d.name}
        labelSize={(d: any) => d.size * 2.5}
        labelDotRadius={0.7}
        labelColor={() => "#ffffff"}
        labelIncludeDot={true}
        labelResolution={4}
        labelAltitude={0.08}
        labelsTransitionDuration={800}
      />
    </motion.div>
  );
};
