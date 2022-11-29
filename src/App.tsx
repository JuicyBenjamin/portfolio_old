import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Technologies from "./routes/Technologies";
import Projects from "./routes/Projects";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header>
        <NavBar />
      </header>
      <main className="min-h-screen flex justify-center bg-slate-900">
        <div className="w-full h-fit xl:w-[75rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
