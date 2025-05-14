import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  const location = useLocation();
  return (
    <>
      {/* routes for each page. Surrounded by Layout to apply appropriate structure and styling */}
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
