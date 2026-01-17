import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position and update active section
  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const containerScrollTop = scrollContainer.scrollTop;
      
      // Change navbar background on scroll
      setScrolled(containerScrollTop > 50);

      // Detect which section is in view
      const sections = ['home', 'services', 'resume', 'projects', 'contact'];
      let currentSection = 'home';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Check if the top of the section is in the upper half of viewport
          // This makes the navbar update as soon as a section enters view
          if (rect.top <= 150 && rect.bottom > 150) {
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  // Function to style active links
  const getLinkClass = (section) => {
    return activeSection === section
      ? "text-emerald-400 relative py-2 after:block after:w-full after:h-0.5 after:bg-emerald-400 after:mt-2 cursor-pointer"
      : "text-gray-300 hover:text-white cursor-pointer";
  };

  return (
    <header className={`w-full text-white fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0f1724] shadow-lg' : 'bg-[#0f1724]/80 backdrop-blur-sm'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span onClick={() => scrollToSection('home')} className="text-xl font-semibold tracking-tight cursor-pointer">
            YeSh
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block -mb-1" aria-hidden="true" />
        </div>

  {/* Desktop Menu */}
  <ul className="hidden md:flex items-center gap-8 text-sm font-medium ml-auto">
          <li>
            <span
              onClick={() => scrollToSection('home')}
              className={getLinkClass('home')}
            >
              Home
            </span>
          </li>
          <li>
            <span
              onClick={() => scrollToSection('services')}
              className={getLinkClass('services')}
            >
              Services
            </span>
          </li>
          <li>
            <span
              onClick={() => scrollToSection('resume')}
              className={getLinkClass('resume')}
            >
              Resume
            </span>
          </li>
          <li>
            <span
              onClick={() => scrollToSection('projects')}
              className={getLinkClass('projects')}
            >
              Projects
            </span>
          </li>
          <li>
            <span
              onClick={() => scrollToSection('contact')}
              className={getLinkClass('contact')}
            >
              Contact
            </span>
          </li>
          {/* Desktop: Hire me placed inside the desktop menu so spacing matches other nav items */}
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-block px-4 py-1.5 bg-emerald-400 text-black rounded-full font-medium hover:opacity-90"
            >
              Hire me
            </button>
          </li>
        </ul>

        {/* Right: Hire Me Button + Mobile Menu Button */}
        <div className="flex items-center gap-5">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0f1724] text-white flex flex-col items-center gap-6 py-4">
          <li>
            <span onClick={() => scrollToSection('home')} className={getLinkClass('home')}>
              Home
            </span>
          </li>
          <li>
            <span onClick={() => scrollToSection('services')} className={getLinkClass('services')}>
              Services
            </span>
          </li>
          <li>
            <span onClick={() => scrollToSection('resume')} className={getLinkClass('resume')}>
              Resume
            </span>
          </li>
          <li>
            <span onClick={() => scrollToSection('projects')} className={getLinkClass('projects')}>
              Projects
            </span>
          </li>
          <li>
            <span onClick={() => scrollToSection('contact')} className={getLinkClass('contact')}>
              Contact
            </span>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-1.5 bg-emerald-400 text-black rounded-full font-medium hover:opacity-90"
            >
              Hire me
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
