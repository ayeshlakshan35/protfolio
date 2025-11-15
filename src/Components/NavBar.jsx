import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to style active links
  const activeClass =
    "text-emerald-400 relative py-2 after:block after:w-full after:h-0.5 after:bg-emerald-400 after:mt-2";
  const inactiveClass = "text-gray-300 hover:text-white";

  return (
    <header className="w-full bg-[#0f1724] text-white">
      <nav className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <NavLink to="/" className="text-xl font-semibold tracking-tight">
            YeSh
          </NavLink>
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block -mb-1" aria-hidden="true" />
        </div>

  {/* Desktop Menu */}
  <ul className="hidden md:flex items-center gap-8 text-sm font-medium ml-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Services"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Resume"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Contact
            </NavLink>
          </li>
          {/* Desktop: Hire me placed inside the desktop menu so spacing matches other nav items */}
          <li>
            <NavLink
              to="/Contact"
              className="hidden md:inline-block px-4 py-1.5 bg-emerald-400 text-black rounded-full font-medium hover:opacity-90"
            >
              Hire me
            </NavLink>
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
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Resume" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/Projects" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="px-4 py-1.5 bg-emerald-400 text-black rounded-full font-medium hover:opacity-90"
              onClick={() => setIsOpen(false)}
            >
              Hire me
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}
