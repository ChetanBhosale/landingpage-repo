"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== Why Choose Us Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390">
          <div className="text-center mb-20">
            <motion.h2
              className="text-3xl font-bold text-orange-500 dark:text-white xl:text-sectiontitle4"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              className="text-lg text-blue-950"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We are committed to delivering excellence in recruitment and HR
              solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-orange-500 dark:text-white">
                ✅ Industry-Specific Expertise
              </h3>
              <p className="mt-3 text-sm text-blue-950">
                We understand sector-specific challenges and deliver recruitment
                solutions tailored to your business needs.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-orange-500 dark:text-white">
                ✅ Access to Niche Talent
              </h3>
              <p className="mt-3 text-sm text-blue-950">
                Our extensive database ensures you find the right professionals,
                from specialists to senior executives.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-orange-500 dark:text-white">
                ✅ Future-Ready Hiring
              </h3>
              <p className="mt-3 text-sm text-blue-950">
                We stay ahead of industry trends to connect businesses with
                talent that drives innovation and success.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <motion.p
              className="text-lg text-blue-950"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              🚀 Looking to build a high-performing team? Let’s make it happen!
            </motion.p>
          </div>
        </div>
      </section>
      {/* <!-- ===== Why Choose Us End ===== --> */}

      {/* <!-- ===== CEO Message Start ===== --> */}
      <section className="overflow-hidden px-4 py-52 my-3 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-12 w-11/12 my-10 text-3xl font-bold text-orange-500 dark:text-white xl:text-sectiontitle4">
                A Message from Our CEO
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Dear Clients, Partners, and Future Collaborators,
                <br />
                <br />
                Welcome to ExuberantHR Consulting—where talent meets opportunity,
                and recruitment is redefined.
                <br />
                <br />
                At ExuberantHR, we believe that people are the true drivers of
                success. Our mission is to go beyond traditional hiring,
                delivering strategic, future-ready recruitment solutions that
                help businesses thrive in an ever-evolving market. With a deep
                understanding of industry trends and an unwavering commitment to
                excellence, we connect companies with the right talent—not just
                for today but for long-term success.
                <br />
                <br />
                “Your Trusted Talentmine” isn’t just our slogan; it’s the
                foundation of everything we do. Whether you're a business
                seeking exceptional professionals or a candidate looking for the
                perfect career opportunity, we are here to guide you with
                expertise, integrity, and innovation.
                <br />
                <br />
                Thank you for trusting ExuberantHR Consulting. We look forward to
                partnering with you and shaping the future of talent together.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="CEO Image"
                  className="hidden xl:block"
                />
                <a
                  href="/about"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Contact Us Now
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CEO Message End ===== --> */}
    </>
  );
};

export default CTA;