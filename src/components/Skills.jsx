import React from 'react';
import { FaJava, FaJira } from 'react-icons/fa';
import { FaDatabase, FaCheckCircle, FaCogs} from 'react-icons/fa';

import { SiCplusplus, SiEclipseide, SiIntellijidea, SiJavascript, SiPostman, SiSelenium } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Java */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-red-500 hover:text-red-500 hover:scale-105 transition-all duration-300">
            <FaJava className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">Java</h3>
          </div>

          {/* JavaScript */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-yellow-500 hover:text-yellow-500 hover:scale-105 transition-all duration-300">
            <SiJavascript className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">JavaScript</h3>
          </div>

          {/* C++ */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-blue-400 hover:text-blue-400 hover:scale-105 transition-all duration-300">
            <SiCplusplus className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">C++</h3>
          </div>

          {/* SQL */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-blue-500 hover:text-blue-500 hover:scale-105 transition-all duration-300">
            <FaDatabase className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">SQL</h3>
          </div>

          {/* Selenium */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-green-500 hover:text-green-500 hover:scale-105 transition-all duration-300">
            <SiSelenium className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">Selenium</h3>
          </div>

          {/* JUnit */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-purple-500 hover:text-purple-500 hover:scale-105 transition-all duration-300">
            <FaCheckCircle className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">JUnit</h3>
          </div>

          {/* TestNG */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-indigo-500 hover:text-indigo-500 hover:scale-105 transition-all duration-300">
            <FaCogs className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">TestNG</h3>
          </div>

          {/* Postman */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-orange-500 hover:text-orange-500 hover:scale-105 transition-all duration-300">
            <SiPostman className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">Postman</h3>
          </div>

          {/* Jira */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-blue-700 hover:text-blue-700 hover:scale-105 transition-all duration-300">
            <FaJira className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">Jira</h3>
          </div>

          {/* IntelliJ IDEA */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all duration-300">
            <SiIntellijidea className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">IntelliJ IDEA</h3>
          </div>

          {/* VS Code */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-cyan-500 hover:text-cyan-500 hover:scale-105 transition-all duration-300">
            <VscVscode className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">VS Code</h3>
          </div>

          {/* Eclipse IDE */}
          <div className="skill-card border border-gray-700 bg-gray-800 hover:border-purple-600 hover:text-purple-600 hover:scale-105 transition-all duration-300">
            <SiEclipseide className="text-4xl" />
            <h3 className="mt-4 text-lg font-semibold">Eclipse IDE</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
