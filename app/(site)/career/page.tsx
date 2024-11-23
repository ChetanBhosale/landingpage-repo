'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';
import emailjs from 'emailjs-com';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    about: '',
    resume: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    setFormData((prev) => ({ ...prev, resume: event.target.files[0] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const doc = new jsPDF();
    doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 10, 10);
    doc.text(`Email: ${formData.email}`, 10, 20);
    doc.text(`About: ${formData.about}`, 10, 30);

    const pdfBlob = doc.output('blob');

    const formDataToSend = new FormData();
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }
    formDataToSend.append('pdfData', pdfBlob);
    formDataToSend.append('to_email', 'hrd@exuberanthr.com');

    emailjs
      .sendForm('your_service_id', 'your_template_id', event.target, 'your_user_id')
      .then(
        (result) => {
          alert('Your application has been submitted successfully!');
        },
        (error) => {
          alert('Failed to submit your application. Please try again later.');
        }
      );
  };

  return (
    <section id="career" className="px-4 md:px-8 my-12">
      <div className="relative mx-auto max-w-screen-lg bg-white p-10 rounded-lg shadow-lg dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Talent Community!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            While only a limited number of our mandates are listed on our website and other online
            platforms, the majority of our job opportunities are not publicly advertised. By sharing
            your details with us, you can become part of our centralized database and gain access to
            exclusive career opportunities.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none p-2 dark:bg-gray-700 dark:text-white"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none p-2 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none p-2 dark:bg-gray-700 dark:text-white"
          />

          <textarea
            name="about"
            placeholder="Tell us about yourself"
            rows={4}
            value={formData.about}
            onChange={handleInputChange}
            required
            className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none p-2 dark:bg-gray-700 dark:text-white"
          ></textarea>

          <div className="flex items-center gap-4">
            <label className="text-gray-600 dark:text-gray-300">Attach Resume:</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300"
          >
            Submit Application
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default CareerPage;
