"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Home() {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveNav(sectionId || "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full px-12 py-4 flex justify-between items-center z-50 backdrop-blur">
        <a
          href="#home"
          className="text-3xl font-extrabold text-red-500 hover:scale-110 transition-transform"
        >
          Alex
        </a>
        <nav className="flex space-x-8">
          {["home", "services", "skills", "education", "experience", "contact"].map(
            (link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`capitalize text-lg font-medium border-b-2 ${
                  activeNav === link
                    ? "text-red-500 border-red-500"
                    : "text-white border-transparent"
                } hover:text-red-500 hover:border-red-500 transition-all`}
              >
                {link}
              </a>
            )
          )}
        </nav>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-12"
      >
        {/* Profile Image */}
        <div className="rounded-full overflow-hidden shadow-red-500 shadow-lg">
          <Image
            src="/main.jpg"
            alt="Alex"
            width={400}
            height={400}
            className="rounded-full hover:scale-105 transition-transform"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            Hi, It&apos;s <span className="text-red-500">GOKUL</span>
          </h1>
          <h3 className="text-4xl font-semibold mt-2">
            I&apos;m a{" "}
            <span className="text-red-500 animate-pulse">
              Web Developer
            </span>
          </h3>
          <p className="mt-4 text-lg max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore
            dolores esse. Odit similique doloribus tenetur doloremque, sunt
            commodi in ipsa repudiandae debitis deleniti blanditiis.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a
              href="#"
              className="p-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black hover:scale-110 shadow-md transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black hover:scale-110 shadow-md transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black hover:scale-110 shadow-md transition-all"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black hover:scale-110 shadow-md transition-all"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 border-2 border-red-500 text-red-500 rounded-full font-semibold tracking-wider hover:bg-red-500 hover:text-black hover:scale-105 shadow-md transition-all"
          >
            Hire Me
          </a>
        </div>
      </section>

      {/* Example Placeholder Sections */}
      <section
        id="services"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-5xl font-bold text-red-500">Services</h2>
      </section>
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-5xl font-bold text-red-500">Skills</h2>
      </section>
      <section
        id="education"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-5xl font-bold text-red-500">Education</h2>
      </section>
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-5xl font-bold text-red-500">Experience</h2>
      </section>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-5xl font-bold text-red-500">Contact</h2>
      </section>
    </main>
  );
}
