"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Profession from './pages/profession/Profession';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Import the CloseIcon

export default function Main() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navBarClass = isScrolled ? 'nav sticky mb-4 top-0 bg-blue-400' : 'nav sticky mb-4 top-0 bg-slate-400';

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const mobileMenuStyle = {
    right: isMobileMenuVisible ? '0px' : '-30vw', // Adjust the value as needed
  };

  return (
    <main className="w-full h-full overflow-x-hidden">
      <div>
        <section className={navBarClass}>
          <nav className='p-4 flex justify-between'>
            <div className="logo">
              App
            </div>
            <ul className='flex hidden xl:block'>
              <Link className='mx-2' href="#home">Home</Link>
              <Link className='mx-2' href="#about">About</Link>
              <Link className='mx-2' href="#profession">Profession</Link>
              <Link className='mx-2' href="#services">Services</Link>
              <Link className='mx-2' href="#contact">Contact</Link>
            </ul>
            <div className='xl:hidden sm:block' onClick={toggleMobileMenu}>
              {isMobileMenuVisible ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className='absolute w-[30vw] h-[100vh] right-[-30vw] top-0 bg-gray-300 transition-all ease-in-out' style={mobileMenuStyle}>
              <button className='absolute top-2 right-2' onClick={toggleMobileMenu}>
                <CloseIcon />
              </button>
              <ul className='block text-center'>
                <Link className='mx-2' href="#home">Home</Link><br />
                <Link className='mx-2' href="#about">About</Link><br />
                <Link className='mx-2' href="#profession">Profession</Link><br />
                <Link className='mx-2' href="#services">Services</Link><br />
                <Link className='mx-2' href="#contact">Contact</Link><br />
              </ul>
            </div>
          </nav>
        </section>

        <section className='Home section w-full h-full' id='home'>
          <Home />
        </section>

        <section className='About section w-full h-full' id='about'>
          <About />
        </section>

        <section className='profession section w-full h-full' id='profession'>
          <Profession />
        </section>

        <section className='Services section w-full h-full' id='services'>
          <Services />
        </section>

        <section className='Contact section w-full h-full' id='contact'>
          <Contact />
        </section>
      </div>
    </main>
  );
}
