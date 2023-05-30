import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import MovieDetails from "./pages/MovieDetails";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <section>
        <section id="navbar">
          <Navbar />
        </section>
        <section id="home">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
