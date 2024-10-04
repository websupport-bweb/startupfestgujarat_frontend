import React, { useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa";

export default function ScrollTop() {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {display && (
        <div className='scroll-top-btn'>
          <button onClick={goTop}>
            <FaAngleUp />
          </button>
        </div>
      )}
    </>
  );
}
