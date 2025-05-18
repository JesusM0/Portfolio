import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, transition: { duration: 1 } }}
      transition={{ duration: 1 }}
      className="pt-20 px-10 text-white"
    >
      <h1 className="text-3xl font-bold mb-4">👤 About Page</h1>
      <p>This is the about section.</p>
    </motion.div>
  );
}
