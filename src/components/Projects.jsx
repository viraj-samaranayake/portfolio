import { FaGithub } from 'react-icons/fa';
import project1 from '/assets/project1.png';
import project2 from '/assets/project2.png';
import project3 from '/assets/project3.png';
import project4 from '/assets/project9.png';
import project5 from '/assets/project5.png';
import project6 from '/assets/project6.png';
import project7 from '/assets/project7.png';
import project8 from '/assets/project8.png';


const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 text-center dark:text-white mb-8">
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src={project1}
              alt="Project 1"
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                Open Cart Web application - Automation
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Java | Selenium WebDriver | TestNG | Extent Reports
              </p>
              <div className="mt-4">
                <span className="mx-2">|</span>
                <a
                  href="https://github.com/viraj-samaranayake/eCommerce-Web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub <FaGithub className="inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src={project2}
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                Open Cart API Testing
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Postman | REST API | Test validation | Chai
              </p>
              <div className="mt-4">
                <span className="mx-2">|</span>
                <a
                  href="https://github.com/viraj-samaranayake/OpencartAPI_test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub <FaGithub className="inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src={project3}
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                Hotel Room Reservation System
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Java Standalone Application | Java Swing | MySQL
              </p>
              <div className="mt-4">
                <span className="mx-2">|</span>
                <a
                  href="https://github.com/viraj-samaranayake/Hotel-Reservation-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub <FaGithub className="inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>


                      
        {/* Project 4 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src={project4}
              alt="Project 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                LearnCey Online Learning Platform
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                MERN Stack MVC Web Application |React|Express|Node|MongoDB
              </p>
              <div className="mt-4">
                <span className="mx-2">|</span>
                <a
                  href="https://github.com/viraj-samaranayake/final-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub <FaGithub className="inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>


          {/* Project 5 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src={project5}
              alt="Project 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                Online Car Rental Application
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                PHP | HTML & CSS | JavaScript | MySQL
              </p>
              <div className="mt-4">
                <span className="mx-2">|</span>
                <a
                  href="https://github.com/viraj-samaranayake/Online-Car-Rental-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub <FaGithub className="inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>



          {/* Project 5 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src={project5}
              alt="Project 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                Online Car Rental Application
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                PHP | HTML & CSS | JavaScript | MySQL
              </p>
              <div className="mt-4">
                <span className="mx-2">|</span>
                <a
                  href="https://github.com/viraj-samaranayake/Online-Car-Rental-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub <FaGithub className="inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>



          {/* Project 6 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src={project6}
              alt="Project 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                Online Food Ordering Application
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                React JS | Tailwind CSS | MongoDB
              </p>
              <div className="mt-4">
                <span className="mx-2">|</span>
                <a
                  href="https://github.com/viraj-samaranayake/Food-Order-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub <FaGithub className="inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 7 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src={project7}
              alt="Project 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                MegaCity-Cabs Online Cab Reservation App
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Java SpringBoot | React JS | Tailwind CSS | MongoDB
              </p>
              <div className="mt-4">
                <span className="mx-2">|</span>
                <a
                  href="https://github.com/viraj-samaranayake/online-vehicle-booking-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub <FaGithub className="inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 8 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src={project8}
              alt="Project 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                MegaCity-Cabs Online Cab Web Automation
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Java | Selenium | Maven
              </p>
              <div className="mt-4">
                <span className="mx-2">|</span>
                <a
                  href="https://github.com/viraj-samaranayake/megacitycab-automation-testing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub <FaGithub className="inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
