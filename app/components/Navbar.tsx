"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = ["about", "projects","contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50 flex justify-between items-center px-6 md:px-12 py-4">
      {/* Portfolio Title */}
      <a
        href="#top"
        className="relative text-2xl md:text-3xl font-extrabold hover:scale-110 transition-transform
                   bg-gradient-to-r from-red-400 via-red-500 to-red-600
                   bg-clip-text text-transparent 
                   animate-gradient-x bg-[length:200%_200%] cursor-pointer"
      >
        Portfolio
        <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 opacity-30 rounded-full"></span>
      </a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`relative px-2 py-1 transition-colors 
                         after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                         after:h-[3px] after:bg-gradient-to-r after:from-red-400 after:to-red-600
                         after:rounded-full after:transition-all after:duration-500 
                         ${
                           activeSection === item
                             ? "text-red-400 after:w-full"
                             : "text-gray-300 hover:text-red-400 focus:text-red-400 after:w-0 hover:after:w-full focus:after:w-full"
                         }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-red-400 text-2xl z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 h-screen w-2/3 bg-black/95 backdrop-blur-lg shadow-lg
                   transform transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8
                   ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {links.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold relative px-2 py-1 transition-colors
                       after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                       after:h-[3px] after:bg-gradient-to-r after:from-red-400 after:to-red-600
                       after:rounded-full after:transition-all after:duration-500
                       ${
                         activeSection === item
                           ? "text-red-400 after:w-full"
                           : "text-gray-300 hover:text-red-400 after:w-0 hover:after:w-full"
                       }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
