import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <About />
      <Footer />
    </div>
  );
}
