// components/TopNavBar.tsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiFolder } from "react-icons/fi";

export const TopNavBar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <FiHome />, name: "home" },
    { to: "/about", icon: <FiUser />, name: "about" },
    { to: "/experience", icon: <FiBriefcase />, name: "experience" },
    { to: "/projects", icon: <FiFolder />, name: "projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900 bg-opacity-80 backdrop-blur-lg rounded-full shadow-xl px-6 py-3 flex items-center gap-4"
    >
      {navItems.map(({ to, icon, name }) => (
        <Link
          key={name}
          to={to}
          className={`w-12 h-12 flex items-center justify-center rounded-full text-xl text-white transition-all duration-300 ${
            location.pathname === to
              ? "bg-violet-600 shadow-md"
              : "hover:bg-slate-700"
          }`}
          title={name}
        >
          {icon}
        </Link>
      ))}
    </motion.nav>
  );
};
