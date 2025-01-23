import React from 'react';
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail, SiX } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 text-center dark:text-white mb-8">Contact Me</h3>
        <div className="flex justify-center gap-8">
          {/* LinkedIn */}
          <a
            href="https://lk.linkedin.com/in/virajsamaranayake"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-blue-200 hover:text-blue-500"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/viraj-samaranayake"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-blue-200 hover:text-blue-500"
          >
            <FaGithub className="text-2xl" />
          </a>

          {/* Email */}
          <a
            href="mailto:samaranayakeviraj@gmail.com"
            className="text-gray-800 dark:text-blue-200 hover:text-blue-500"
          >
            <SiGmail className="text-2xl" />
          </a>

          {/* X twitter */}
          <a
            href="https://x.com/Viraj_sa"
            target="_blank"
            className="text-gray-800 dark:text-blue-200 hover:text-blue-500"
          >
            <SiX className="text-2xl" />
          </a>

          {/* Phone */}
          <a
            href="tel:+94714823155"
            className="text-gray-800 dark:text-blue-200 hover:text-blue-500"
          >
            <FaPhoneAlt className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
