"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            {/* Form Section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  
                  const form = e.currentTarget;
                  const name = form.name.valueOf;
                  const email = form.email.value;
                  const message = form.message.value;
                  const mailto = `mailto:hrd@exuberanthr.com?subject=Message from ${name}&body=${encodeURIComponent(message)} - Sent from ${email}`;
                  window.location.href = mailto;
                }}
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee lg:w-1/2"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee lg:w-1/2"
                    required
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-blackho dark:bg-btndark"
                >
                  Send Message
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              </form>
            </motion.div>

            {/* Contact Details Section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              <div className="mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Location
                </h3>
                <p>A-1308, YashOne Society, Pathak Road, Maan, Hinjawadi Phase-I, Pune, Maharashtra-411057, India</p>
              </div>
              <div className="mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email
                </h3>
                <p>
  <a href="mailto:hrd@exuberanthr.com">hrd@exuberanthr.com</a>
</p>
              </div>
              <div className="mb-7">
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone
                </h4>
                <p>
                  <a href="tel:+91 7498815152">+91 7498815152</a>
                </p>
              </div>

              <button
                className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-green-500 px-6 py-3 font-medium text-white hover:bg-green-600"
                onClick={() =>
                  window.open(
                    "https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
                    "_blank"
                  )
                }
              >

                Contact Us
                  <RiWhatsappFill size={30} />
              </button>
              <section id="support" className="px-4 md:px-8 2xl:px-0 justify-start text-start" >
        {/* Existing content */}
        <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          {/* Existing Form and Contact Details Section */}
        </div>
        
        {/* Social Media Links Section */}
        {/* <div className="flex justify-center mt-10 gap-4">
          <a href="https://www.facebook.com/people/Exuberanthr-Consulting/100086650797217/"
             className="text-blue-600 hover:text-blue-800">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com/company/exuberanthr/"
             className="text-blue-500 hover:text-blue-700">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://x.com/sunilpjagtap"
             className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={24} />
          </a>
        </div> */}
      </section>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
