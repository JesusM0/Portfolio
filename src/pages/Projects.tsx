import { motion } from "framer-motion";
import portfolio from "../assets/images/portfolio.png";
import ucfMap from "../assets/images/ucf_map.png";
import covidMap from "../assets/images/covid_map.png";
import askPolaris from "../assets/images/askpolaris.png";

const projects = [
  {
    title: "Personal Portfolio",
    description: "React-based Portfolio to strenghten my Front-End Skills!",
    tech: ["React", "TypeScript", "Framer-motion", "TailwindCSS"],
    image: portfolio,
  },
  {
    title: "UCF MAP Guesser",
    description:
      "A GeoGuesser game based in UCF. Collaborated with fellow classmates to create this game as our final project!",
    tech: ["MongoDB", "Expressjs", "React", "Nodejs", "Passwordjs"],
    image: ucfMap,
  },
  {
    title: "COVID-19 Interactive Map",
    description:
      "An interactive global COVID-19 tracker created during the 2020 pandemic. The map dynamicall shows real-time case data dn location stats to help raise awareness and inform our users",
    tech: ["HTML/CSS", "JavaScript", "Leafletjs", "PureCSS"],
    image: covidMap,
  },
  {
    title: "AskPolaris",
    description:
      "An AI-driven IT Solutions Bot currently in development in collaboration with the United States Space Force Capstone Program. ",
    tech: [
      "GPT-4",
      "Azure SQL",
      "Python",
      "Flask",
      "React",
      "Azure Blob Storage",
      "Azure AI Search",
    ],
    image: askPolaris,
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-30">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-xl rounded-xl overflow-hidden shadow-lg group aspect-[4/3] bg-black"
        >
          <img
            src={project.image}
            alt={`${project.title} image`}
            className="absolute w-full h-full object-cover filter blur-sm group-hover:blur-none transition duration-300"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="bg-black/50 p-4 rounded-md">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-2 py-1 rounded-md border border-white/20 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
