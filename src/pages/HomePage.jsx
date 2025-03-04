import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  return (
    <div className="border-component home-page">
      {/* Bola azul en el fondo */}
      <div className="background-circle"></div>

      {/* Imagen al frente */}
      <img
        src="/public/images/home-image2.jpg"
        alt="Mi Foto"
        className="profile-image"
      />
      <div className="position-relative top-50">
        <h1>
          Hola, soy{" "}
          <span className="typewriter">
            <Typewriter
              words={[
                " Desarrollador Web",
                " React Lover",
                " Fullstack Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
