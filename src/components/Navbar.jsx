// import React, { useState } from 'react'

// const Navbar = () => {

//     const [nav, setNav] = useState(false)

//     const toggleNav = () =>{
//         setNav(!nav)
//     }

//     const closeNav = () =>{
//         setNav(false)
//     }

//     const menuVariants = {
//         open: {
//             x: 0,
//             transition: {
//                 stiffness: 20,
//                 damping: 15
//             },
//             closed: {
//                 x: '-100%',
//                 transition: {
//                     stiffness: 20,
//                     damping: 15
//                 }
//             }
//         }
//     }

//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar


import React, { useState, useEffect } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    // Apply the theme based on the state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo (Hidden on Small Devices) */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white hidden md:block">
          <a href="/portfolio/">Vj</a>
        </h1>

        {/* Hamburger Menu Button (Visible on Small Screens) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded bg-gray-800 focus:outline-none"
        >
        <HiMenuAlt2 className='text-white'/>
        </button>



        {/* Navigation (Hidden on Small Screens) */}
        <nav className="hidden md:flex space-x-4">
          <ul className="flex space-x-12 text-blue-100 font-bold">
            <li>
              <a href="#skills" className="hover:text-blue-500">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">
                Portfolio
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1uMVuNJJu9SY613OCwHitOzcqa81DJ1L2/view" target='_blank' className="hover:text-blue-500">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="bg-white dark:bg-gray-900 shadow-md block md:hidden"
        >
          <ul className="flex flex-col space-y-4 px-4 py-6 font-bold text-center text-blue-200">
            <li>
              <a href="#skills" className="hover:text-blue-500">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">
                Portfolio
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1uMVuNJJu9SY613OCwHitOzcqa81DJ1L2/view" className="hover:text-blue-500">
                Resume
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
