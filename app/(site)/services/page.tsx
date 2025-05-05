'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  let services = [
    {
      name: "Executive Search",
      img: "https://saviscorphr.in/assets/1executivesearch.jpg",
      description: "Conducting a comprehensive search for senior-level executives, such as CEOs, CFOs, and COOs, to help organizations fill top-level positions."
    },
    {
      name: "Contract Staffing",
      img: "https://saviscorphr.in/assets/2contract.jpg",
      description: "Providing temporary staffing solutions to help organizations meet their immediate staffing needs."
    },
    {
      name: "Campus",
      img: "https://saviscorphr.in/assets/service_06-1280x960.jpg",
      description: "Recruiting fresh talent from educational institutions to help organizations fill entry-level positions."
    },
    {
      name: "Technical Hiring",
      img: "https://saviscorphr.in/assets/4technical.jpg",
      description: "Recruiting candidates with specialized technical skills, such as software developers, engineers, and data analysts."
    },
    {
      name: "International Recruitment",
      img: "https://saviscorphr.in/assets/5international.jpg",
      description: "Helping organizations recruit candidates from overseas to fill positions that require specialized skills and experience."
    },
    {
      name: "Staff Augmentation",
      img: "https://saviscorphr.in/assets/7staff.jpg",
      description: "Providing skilled professionals to organizations on a project basis, helping them to supplement their existing workforce."
    },
    {
      name: "Training and Development",
      img: "https://online.maryville.edu/wp-content/uploads/sites/97/2021/04/whiteboard-training.jpg",
      description: "Offering tailored training programs and development workshops to help organizations enhance employee skills and performance."
    },
    {
      name: "Payroll Management",
      img: "https://www.peoplehr.com/media/rdbiimgi/team-discussing-integrated-hr-payroll-software.png?anchor=center&mode=crop&heightratio=0.7727272727272727272727272727&width=726&rnd=133113331158270000",
      description: "Streamlining payroll processes and ensuring timely salary disbursements with accurate calculations and compliance."
    },
    {
      name: "Diversity Hiring",
      img: "https://media.licdn.com/dms/image/v2/D4D12AQFStFmCKiGc5w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697692433728?e=2147483647&v=beta&t=_188ddEQLhhlwi8YBZVKhAMcBq18mpTE1DOZ7pbFcoU",
      description: "Helping organizations build inclusive teams by focusing on hiring candidates from diverse backgrounds and underrepresented groups."
    }
  ];

  return (
    <div className="my-28 px-4 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-orange-500 mb-4 uppercase my-18">Our Exceptional Services</h1>
        <p className="text-orange-500 text-lg">We provide the best solutions tailored to your needs, ensuring excellence and satisfaction.</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-semibold text-orange-500 mb-4">
                {service.name}
              </h2>
              <p className="text-blue-950 text-sm">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
