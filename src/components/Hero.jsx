import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';


const Hero = () => {

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen bg-cover bg-gray-100 dark:bg-gray-800"
      style={{ backgroundImage: "url('https://drive.google.com/uc?export=view&id=1-Lhg5BLKLYKPd0Z6RpNN1FR_-n4VFTz7')" }}
    >
      <h1 className="text-4xl text-gray-200 md:text-6xl font-bold mb-4">
        Hello👋, I&apos;m <span className="text-blue-400">Viraj</span>
      </h1>
      <p className="text-xl text-gray-200 md:text-2xl font-semibold mb-2">& a</p>
      <p className="text-xl text-gray-200 md:text-2xl font-light mb-6">

        <TypeAnimation
          sequence={[
            "QA Engineer",1000,
            "Problem Solver",1000,
            "Test Automation Enthusiast",1000,
            "SE undergraduate",1000,
          ]}
          speed={50}
          repeat={Infinity}
          className='font-bold text-blue-400'
          />

          <motion.p
          initial={{opacity:0, y: -50}}
          whileInView={{ opacity: 1, y:0}}
          viewport={{once:true}}
          transition={{duration:1}}
          ></motion.p>
      </p>

      <a
        href="https://drive.google.com/file/d/1uMVuNJJu9SY613OCwHitOzcqa81DJ1L2/view"
        target="_blank"
        className="flex items-center font-bold px-6 py-3 bg-blue-500 opacity-80 text-white rounded-full hover:bg-blue-600"
      >
      <FaDownload className='mr-3'/>
        Resume
      </a>

      <div className="fixed left-0.5 top-1/2 z-50 transform -translate-y-1/2 flex flex-col space-y-2 bg-gray-700 bg-opacity-40 opacity-80 p-1 rounded-full shadow-lg">
      {/* WhatsApp */}
      <a
        href="https://wa.me/+94714823155"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-green-500 text-white transition duration-300"
      >
        <FaWhatsapp className="text-lg" />
      </a>

      {/* Email */}
      <a
        href="mailto:samaranayakeviraj@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-red-600 text-white transition duration-300"
      >
        <FaEnvelope className='text-lg' />
      </a>

      {/* LinkedIn */}
      <a
        href="https://lk.linkedin.com/in/virajsamaranayake/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-700 text-white transition duration-300"
      >
        <FaLinkedinIn className='text-lg' />
      </a>
    </div>

    </section>

    


  );
};

export default Hero;
