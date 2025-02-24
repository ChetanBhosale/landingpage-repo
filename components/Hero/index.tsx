"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "contact@exuberanthr.com"; // Replace with your recipient email
    const subject = encodeURIComponent("Interested in Your Services");
    const body = encodeURIComponent(
      `Hi, My Organization is Interested in your service. Please find my email address: ${email}`
    );

    // Redirect to the mail client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-[#ED7014]">
                🔥 ExuberantHR - Recruitment Redefined
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-[#ED7014]  xl:text-hero ">
                Your Trusted Talentmine!
              </h1>
              <p className="mb-5">
                At ExuberantHR Consulting, we go beyond recruitment—we build
                high-performing teams that drive business success. As Your
                Trusted Talentmine, we specialize in identifying top-tier talent,
                optimizing hiring strategies, and enhancing workforce efficiency.
                Whether you're scaling up or refining your hiring process, we
                deliver customized solutions to help you attract, hire, and retain
                the best professionals.
              </p>

              <ul className="mb-5 list-disc pl-5">
                <li>Industry-Specific Hiring Solutions</li>
                <li>Strategic Talent Acquisition</li>
                <li>Seamless Recruitment Process Optimization</li>
              </ul>

              <p className="mb-10">
                Partner with us to unlock the full potential of your workforce and
                take your business to new heights.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      type="submit"
                      aria-label="get started button"
                      className="flex rounded-full bg-blue-800 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button> */}
                  </div>
                </form>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden object-cover"
                    src="/images/my-img/hero-img.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="shadow-solid-l object-cover"
                    src="/images/my-img/hero-img.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;