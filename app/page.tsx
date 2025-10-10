import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Navbar from "./components/Navbar";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import ProjectCard from "./components/Project";

export default function Home() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with Next.js, TailwindCSS, and Framer Motion.",
      image: "/main.png",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "https://github.com/gokul123o",
      demo: "https://yourportfolio.com",
    },
    {
      title: "Air-near",
      description: "An api technology which finds the nearest airport location",
      image: "/air.png",
      tech: ["Next.js", "Supabase", "Tailwind"],
      github: "https://github.com/gokul123o/air-near",
      demo: "https://air-near.vercel.app/",
    },
    {
      title: "Gemini-clone",
      description: "An AI-powered chatbot application that replicates Gemini’s conversational features using Google’s Gemini API.",
      image: "/gemini.png",
      tech: ["Next.js", "Tailwind", "Gemini-api"],
      github: "https://github.com/gokul123o/Gemini-ai",
      demo: "https://gemini-ai-livid-xi.vercel.app/",
    },
    {
      title: "M-code ui",
      description: "Sample ui design using spline",
      image: "/mcode.png",
      tech: ["Next.js", "Tailwind", "spline"],
      github: "https://github.com/gokul123o/Mcode-ui",
      demo: "https://web-css-html.vercel.app/",
    },
  ];

  return (
    <div id="top">
      <Navbar />

      {/* About */}
      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 md:px-12 py-12"
      >
        {/* Profile Image */}
        <div className="flex-shrink-0 rounded-full overflow-hidden shadow-xl w-56 h-56 md:w-[400px] md:h-[400px]">
          <Image
            src="/img.png"
            alt="Gokul"
            width={400}
            height={400}
            className="rounded-full hover:scale-105 transition-transform w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, It&apos;s <span className="text-red-500">GOKUL</span>
          </h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">
            I&apos;m a{" "}
            <span className="text-red-500 animate-pulse">Web Developer</span>
          </h3>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
            I am a Full Stack Web Developer specializing in building highly
            responsive, visually compelling, and performant user interfaces
            using React and Tailwind CSS. My primary focus lies in the frontend,
            where I leverage my deep understanding of the React ecosystem to
            create dynamic, scalable single-page applications (SPAs) that
            deliver exceptional user experiences. While my expertise is centered
            on pixel-perfect, utility-first design with Tailwind, I possess
            comprehensive backend knowledge (Node.js/Express, API integration)
            which allows me to work fluidly across the entire application stack.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/gokul-g-bbba2b326/"
              aria-label="LinkedIn"
              className="p-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black hover:scale-110 shadow-md transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/gokul123o"
              aria-label="GitHub"
              className="p-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black hover:scale-110 shadow-md transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.instagram.com/the_wizard__f_oz"
              aria-label="Instagram"
              className="p-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black hover:scale-110 shadow-md transition-all"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="inline-block mt-8 px-6 sm:px-8 py-3 border-2 border-red-500 text-red-500 rounded-full font-semibold tracking-wider hover:bg-red-500 hover:text-black hover:scale-105 shadow-md transition-all"
          >
            Hire Me
          </a>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen bg-black px-6 sm:px-12 py-16 flex flex-col items-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-red-500 mb-12 text-center">
          Projects
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 bg-gray-900 text-white"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-red-500 mb-12 text-center">
          Contact Me
        </h2>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 max-w-md w-full text-center">
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Feel free to reach out to me through any of the following channels.
          </p>

          <div className="space-y-6 mb-10">
            {/* Email */}
            <div className="flex items-center justify-center text-lg md:text-xl">
              <FaEnvelope
                className="text-red-500 mr-4 flex-shrink-0"
                size={24}
              />
              <a
                href="mailto:gokulakash125@gmail.com"
                className="text-white hover:text-red-500 transition-colors"
              >
                gokulakash125@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center text-lg md:text-xl">
              <FaPhoneAlt
                className="text-red-500 mr-4 flex-shrink-0"
                size={24}
              />
              <a
                href="tel:+919037246693"
                className="text-white hover:text-red-500 transition-colors"
              >
                +91 9037246693
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center justify-center text-lg md:text-xl">
              <FaWhatsapp
                className="text-red-500 mr-4 flex-shrink-0"
                size={24}
              />
              <a
                href="https://wa.me/919037246693"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
              >
                +91 9037246693
              </a>
            </div>
          </div>

          {/* Send Email Button */}
          <a
            href="mailto:gokulakash125@gmail.com?subject=Portfolio Inquiry&body=Hi Gokul, I saw your portfolio and would like to get in touch regarding..."
            className="inline-block mt-8 px-6 sm:px-8 py-3 border-2 border-red-500 text-red-500 rounded-full font-semibold tracking-wider hover:bg-red-500 hover:text-black hover:scale-105 shadow-md transition-all"
          >
            <FaEnvelope className="inline-block mr-2" /> Send Email
          </a>
        </div>
      </section>
    </div>
  );
}
