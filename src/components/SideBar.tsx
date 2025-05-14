import { Link, useLocation } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export const SideBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "ABOUT", to: "/about" },
    { name: "EXPERIENCE", to: "/experience" },
    { name: "PROJECTS", to: "/projects" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-between h-full w-full"
    >
      <div className="pt-28 pl-70 flex flex-col gap-8">
        <div>
          <h1 className="text-6xl font-bold tracking-tight">Jesus Molina</h1>
          <p className="text-sm text-gray-400 mt-1">
            Computer Science@University of Central Florida
          </p>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            debitis. Sequi distinctio ad mollitia cumque officia, delectus,
            nulla id quasi molestias assumenda consequatur quidem quisquam
            animi, asperiores nostrum qui numquam!
          </p>
        </div>
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
      <footer className="flex items-center justify-start pb-45 pl-100 gap-6 text-2xl text-gray-400 ">
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
  );
};
