import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText, ScrambleTextPlugin } from "gsap/all";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GoDownload } from "react-icons/go";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export default function Home() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const headerTwoRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const span = textRef.current;
    const h2 = headerTwoRef.current;
    if (!span) return;
    if (!h2) return;

    const titles = [
      "Python Disciple",
      "Java Enthusist",
      "C Adversary",
      "PHP Enjoyer",
      "React Fanatic",
    ];
    const greetings = [
      "Welcome to My Website!",
      "Bienvenid@ a mi portafolio!",
      "Explore around! Glad you came for a visit!",
      "Pásale! Este es mi portafolio, échale un ojo.",
      "You're Always Welcome Here!",
    ];

    const textColorMap: Record<string, string> = {
      "Python Disciple": "text-amber-200",
      "Java Enthusist": "text-red-500",
      "C Adversary": "text-blue-500",
      "PHP Enjoyer": "text-violet-500",
      "React Fanatic": "text-sky-400",
    };
    const t1 = gsap.timeline({ repeat: 0 });

    greetings.forEach((greeting) => {
      t1.to(h2, {
        duration: 2,
        scrambleText: {
          text: greeting,
          chars: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
          revealDelay: 0.5,
          speed: 0.1,
        },
        ease: "none",
      });
      t1.to({}, { duration: 1 });
    });

    const t2 = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    titles.forEach((title) => {
      t2.to(span, {
        duration: 2,
        scrambleText: {
          text: title,
          chars: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
          revealDelay: 0.3,
          speed: 1,
        },
        ease: "none",
        onStart: () => {
          span.className = `inline-block ${
            textColorMap[title] || "text-white"
          }`;
        },
      });
    });
  }, []);

  const navLinks = [
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
  ];
  return (
    <div className="relative h-screen w-full overflow-hidden px-4">
      {/* Hero Section */}
      <div className="h-full flex flex-col justify-center items-start max-w-4xl mx-auto gap-6 right-content">
        {/* Scramble Text Line */}
        <motion.p
          ref={headerTwoRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-md text-green-400 font-mono"
        >
          {/* will be scrambled */}
          Welcome!
        </motion.p>
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-white"
        >
          Jesus Molina.
        </motion.h1>
        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-gray-400"
        >
          Computer Science@University of Central Florida
        </motion.h2>

        {/* Description */}
        <motion.p
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 max-w-lg text-xl font-mono"
        >
          {" "}
          <span
            ref={textRef}
            className="inline-block text-green-400 min-w-[10ch]"
          ></span>{" "}
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          veritatis minima fugit distinctio placeat. Animi, ab ea aspernatur
          expedita itaque laudantium aliquam quia voluptatibus veniam adipisci
          quod numquam in. Nobis.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4 mt-10"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-6 text-gray-400 text-2xl pt-6"
        >
          <a
            href="https://github.com/JesusM0"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="hover:text-violet-500"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jesus-m0lina/"
            target="_blank"
            rel="noreferrer"
            title="Lets Connect on LinkedIn"
            className="hover:text-blue-500"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_chuycho_/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className="hover:text-pink-400"
          >
            <BsInstagram />
          </a>
          <a
            href="https://leetcode.com/u/Kos-MosV2/"
            target="_blank"
            rel="noreferrer"
            title="Compare Our Stats on LeetCode!"
            className="hover:text-yellow-400"
          >
            <SiLeetcode />
          </a>
          <a
            href="/Jesus_Molina_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            title="Checkout Out My Resume"
            className="hover:text-yellow-400"
          >
            <GoDownload />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
