"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaTruck, FaCode, FaShoppingCart, FaChartLine, FaCar, FaIndustry, FaFlask } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const sectors = [
  {
    icon: <FaTruck className="text-3xl text-primary" />,
    title: "Logistics",
    description:
      "Recruitment for logistics and supply chain management companies, including operations, sales, and customer service roles.",
  },
  {
    icon: <FaCode className="text-3xl text-primary" />,
    title: "Information Technology",
    description:
      "Skilled professionals for IT roles, including software developers, network engineers, data analysts, and project managers.",
  },
  {
    icon: <FaShoppingCart className="text-3xl text-primary" />,
    title: "Retail",
    description:
      "Helping retail businesses find talent for sales associates, managers, and e-commerce professionals.",
  },
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "NBFC",
    description:
      "Talent acquisition for non-banking financial companies, including sales, operations, credit, and risk management.",
  },
  {
    icon: <FaCar className="text-3xl text-primary" />,
    title: "Auto Industry",
    description:
      "Recruitment for automotive companies, including car manufacturers, ancillary companies, and dealerships.",
  },
  {
    icon: <FaIndustry className="text-3xl text-primary" />,
    title: "Iron and Steel",
    description:
      "Providing recruitment solutions for manufacturers and distributors in the iron and steel industry.",
  },
  {
    icon: <FaFlask className="text-3xl text-primary" />,
    title: "Paints and Chemicals",
    description:
      "Finding talent for sales, operations, and R&D roles in the paints and chemicals sector.",
  },
  {
    icon: <MdOutlineRealEstateAgent className="text-3xl text-primary" />,
    title: "FMCG",
    description:
      "Recruitment solutions for FMCG companies in food, personal care, and home care sectors.",
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
              className="text-4xl font-bold text-black dark:text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sectors We Cater To
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Explore the industries we serve with precision and expertise,
              connecting top talent with leading companies.
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
                <h3 className="text-xl font-semibold text-black dark:text-white text-center">
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-3">
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
