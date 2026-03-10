// pages/index.js
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Connect from '../components/Connect';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const blur = Math.min(scrollTop / 50, 15); // Max blur of 15px
      setBlurAmount(blur);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔒 fixed background image (overlays all sections) */}
      <div className="fixed inset-0 z-0">
        <img
          src="/hero8.jpg"
          alt="Background"
          style={{ 
            filter: `blur(${blurAmount}px)`,
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, rgba(0,0,0,0.5) 35%, black 55%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, rgba(0,0,0,0.5) 35%, black 55%, black 100%)'
          }}
          className="w-full h-full object-contain object-[250px_0px] scale-150"
        />
      </div>

      {/* 🔳 Overlay image if needed */}
      <div className="fixed inset-0 z-10 bg-black/0" />

      {/* Gradient edges */}
      <div className="fixed inset-y-0 left-0 w-40 md:w-64 z-15 bg-gradient-to-r from-black/90 to-transparent" />
      <div className="fixed inset-y-0 right-0 w-40 md:w-64 z-15 bg-gradient-to-l from-black/90 to-transparent" />

      {/* 🔼 Actual page content */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <About /> 
        <Connect />
        <Footer />
      </div>
    </div>
  );
}


