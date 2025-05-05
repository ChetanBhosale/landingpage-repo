"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaTruck,
  FaCode,
  FaShoppingCart,
  FaChartLine,
  FaCar,
  FaIndustry,
  FaFlask,
  FaBuilding,
  FaCogs,
  FaMicroscope,
  FaLaptop,
  FaMoneyBillAlt,
  FaRocket,
  FaHardHat,
  FaLightbulb,
} from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const sectors = [
  {
    icon: <MdOutlineRealEstateAgent className="text-3xl text-primary" />,
    title: "Real Estate & Infrastructure",
    description:
      "From project management to sales and marketing, we help real estate firms build dynamic teams that drive growth in this evolving sector.",
  },
  {
    icon: <FaCar className="text-3xl text-primary" />,
    title: "Automobile & Automotive Engineering",
    description:
      "With the rapid shift towards EV (Electric Vehicles), smart mobility, and advanced manufacturing, we connect businesses with automotive engineers, R&D specialists, supply chain experts, and sales professionals to stay ahead in this competitive industry.",
  },
  {
    icon: <FaIndustry className="text-3xl text-primary" />,
    title: "Engineering & Manufacturing",
    description:
      "We connect businesses with highly skilled engineers, production managers, and technical experts, ensuring operational excellence and innovation.",
  },
  {
    icon: <FaFlask className="text-3xl text-primary" />,
    title: "Biotechnology & Life Sciences",
    description:
      "With an increasing demand for specialized professionals in clinical research, biostatistics, and pharmaceutical development, we provide top-tier talent to drive advancements in healthcare and life sciences.",
  },
  {
    icon: <FaLaptop className="text-3xl text-primary" />,
    title: "Information Technology (IT) & Consulting",
    description:
      "In the fast-paced world of IT, we deliver skilled developers, IT consultants, cybersecurity specialists, and ServiceNow experts to help businesses stay ahead in the digital landscape.",
  },
  {
    icon: <FaMoneyBillAlt className="text-3xl text-primary" />,
    title: "BFSI (Banking, Financial Services & Insurance)",
    description:
      "From investment analysts to risk management professionals, we support financial institutions in building future-ready teams.",
  },
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "Equity & Financial Markets",
    description:
      "We help companies hire equity analysts, traders, and portfolio managers with deep market knowledge to make strategic financial decisions.",
  },
  {
    icon: <FaRocket className="text-3xl text-primary" />,
    title: "Startups & Emerging Businesses",
    description:
      "We understand the unique hiring needs of startups and offer scalable, agile recruitment solutions to help them attract top talent in their growth phase.",
  },
  {
    icon: <FaHardHat className="text-3xl text-primary" />,
    title: "Heavy Industries & Energy",
    description:
      "Specializing in sectors like steel, mining, and renewable energy, we provide companies with skilled professionals who can drive industrial innovation and sustainability.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-primary" />,
    title: "More Industries",
    description:
      "Our expertise extends beyond these key sectors, allowing us to support businesses across various domains with customized hiring strategies.",
  },
];

const About = () => {
  return (
    <>
      {/* ===== About Section Start ===== */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-0">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-orange-500 dark:text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sectors We Cater To
            </motion.h2>
            <motion.p
              className="text-lg text-blue-950"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Delivering Talent Excellence Across Industries
            </motion.p>
          </div>

          {/* Grid Layout for Sectors */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 bg-primary bg-opacity-10 rounded-full mx-auto mb-4">
                  {sector.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-orange-500 dark:text-white text-center">
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-blue-950 text-center mt-3">
                  {sector.description}
                </p>

                {/* Hover Animation */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-blue-500 opacity-0 rounded-xl z-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ===== About Section End ===== */}
    </>
  );
};

export default About;