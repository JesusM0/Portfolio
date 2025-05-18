import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function TopNavBar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 1 } }}
      transition={{ duration: 1 }}
      className="w-full h-16 px-10 fixed top-0 left-0 z-50 flex items-center justify-between"
    >
      {/* logo */}
      <div className="text-white text-xl font-bold tracking-tight">
        Jesus Molina
      </div>

      {/* page links */}
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            className={`text-md font-mono tracking-wide transition-colors duration-300 
              ${
                location.pathname === item.to
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
