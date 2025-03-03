import React from "react";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Proyects from "./pages/Proyects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

const PortfolioApp = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        {/* Sección Home */}
        <section
          id="home"
          className="min-vh-100 d-flex align-items-center justify-content-center py-5"
        >
          <div className="container text-center">
            <HomePage />
          </div>
        </section>

        {/* Sección Nosotros */}
        <section
          id="about"
          className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5"
        >
          <div className="container text-center">
            <AboutPage />
          </div>
        </section>

        {/* Sección Contacto */}
        <section
          id="contact"
          className="min-vh-100 d-flex align-items-center justify-content-center py-5"
        >
          <div className="container text-center">
            <ContactPage />
          </div>
        </section>

        {/* Sección de proyectos */}
        <section
          id="proyects"
          className="min-vh-100 d-flex align-items-center justify-content-center py-5"
        >
          <div className="container text-center">
            <Proyects />
          </div>
        </section>

        {/* Sección de habilidades */}
        <section
          id="skills"
          className="min-vh-100 d-flex align-items-center justify-content-center py-5"
        >
          <div className="container text-center">
            <Skills />
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default PortfolioApp;
