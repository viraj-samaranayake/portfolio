import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { SlArrowUp } from 'react-icons/sl';

const ScrollButton = () => {
  // State to track whether the button should be shown
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and show the button after scrolling down 300px
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);  // Show button when scrolled down
    } else {
      setIsVisible(false);  // Hide button when at the top
    }
  };

  // Scroll the page to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Set up a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-blue-500 outline-white outline-1 text-white opacity-60 p-3 rounded-full shadow-lg text-xl ${isVisible ? '' : 'hidden'} z-50 hover:bg-blue-700 transition`}
    >
      <SlArrowUp className='text-lg'/>
    </button>
  )
}

export default ScrollButton
