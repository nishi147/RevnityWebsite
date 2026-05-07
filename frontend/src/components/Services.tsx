import { motion } from "framer-motion";
import holo from "@/assets/holo-cube.jpg";
import phone from "@/assets/dark-phone.jpg";
import dash from "@/assets/dashboard-stack.jpg";
import silk from "@/assets/silk-blue.jpg";
import meeting from "@/assets/meeting.jpg";
import professional from "@/assets/professional.jpg";
import team from "@/assets/team.jpg";
import collaboration from "@/assets/collaboration.jpg";
import boardroom from "@/assets/boardroom.jpg";

const coreServices = [
  {
    title: "Technographic Intelligence",
    desc: "Access in-depth insights on the customer base of over 45,000 technologies, including software, cloud, and hardware solutions, to refine and optimize your targeting strategy.",
    className: "md:col-span-6"
  },
  {
    title: "Channel Partner Insights",
    desc: "Empower your channel strategy with in-depth partner profiles tailored to boost recruitment and long-term success.",
    className: "md:col-span-6"
  },
  {
    title: "Title Based Database",
    desc: "Identify and engage key decision-makers by segmenting your target audience based on job titles. Increase efficiency, personalize outreach, and accelerate deal velocity.",
    className: "md:col-span-4"
  },
  {
    title: "Stack Data Append",
    desc: "Add technology usage information from the list of target accounts or accounts in your CRM to get more insights on the tech stack of your MHAs.",
    className: "md:col-span-4"
  },
  {
    title: "Industry Database",
    desc: "Power your pipeline with AI-driven industry segmentation. Our solution maps SIC and NAICS data to deliver accurate vertical insights—so you can prioritize the right markets at the right time.",
    className: "md:col-span-4"
  },
  {
    title: "Data Appending & Discovery",
    desc: "Unlock better outreach results by appending updated and right decision-makers information to your existing account data—driving smarter campaigns and deeper market reach.",
    className: "md:col-span-12"
  }
];

export function Services() {
  return (
    <section id="service" className="relative bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl"
          >
            Explore Our Professional{" "}
            <span className="text-[#004ab0]">Data & Marketing</span> Services
          </motion.h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            Empowering growth and strategy teams with data-driven insights for exponential success. 
            We provide actionable intelligence and innovative solutions to drive impactful decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {coreServices.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-[#004ab0] p-8 md:p-10 text-white shadow-xl ${item.className}`}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold sm:text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  {item.desc}
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all group-hover:bg-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
