import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import ScrambleText from "gsap/all";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

//Right Side of HomePage
export default function Home() {
  gsap.registerPlugin(SplitText, ScrambleText);

  const divRef = useRef(null);

  //run gsap animation on mount. Without it, animation wont play each time
  useEffect(() => {
    //targeting right-content class using type words(can also use chars)
    const split = new SplitText(".right-content", { type: "words, chars" });
    const words = split.words;

    //animation settings
    gsap.from(words, {
      x: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });
    return () => {
      split.revert();
    };
  }, []);

  // Define navigation links
  const navLinks = [
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side*/}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-1/2 flex flex-col justify-between pl-20 pt-28"
      >
        {/* Personal Info */}
        <div className="pt-10 pl-60 flex flex-col gap-8">
          <div>
            <h1 className="text-6xl font-bold tracking-tight">Jesus Molina</h1>
            <p className="text-sm text-gray-400 mt-1">
              Computer Science@University of Central Florida
            </p>
            <p className="text-sm text-gray-400 mt-2 max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-4 mt-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`relative uppercase text-sm tracking-wide font-medium pl-4 transition-all ${
                  location.pathname === link.to
                    ? "text-white border-l-2 border-white"
                    : "text-gray-400 hover:text-white hover:border-l-2 hover:border-x-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Icons */}
        <footer className="flex items-center justify-start pb-50 pl-85 gap-6 text-2xl text-gray-400">
          <a
            className="hover:text-violet-600"
            href="https://github.com/JesusM0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className="hover:text-blue-600"
            href="https://www.linkedin.com/in/jesus-m0lina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            className="hover:text-rose-600"
            href="https://www.instagram.com/_chuycho_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            className="hover:text-amber-500"
            href="https://www.instagram.com/_chuycho_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>
        </footer>
      </motion.div>

      {/* Right Side */}
      <motion.div
        ref={divRef}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-1/2 flex flex-col justify-start pl-5 pt-41 gap-4 right-content"
      >
        <h1 className="text-4xl font-bold">Right Home</h1>
        <p>
          Welcome to my portfolio! I created this portfolio using react.
          <br /> Feel free to look around!
        </p>
      </motion.div>
    </div>
  );
}
