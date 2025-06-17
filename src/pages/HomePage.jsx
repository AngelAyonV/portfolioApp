import React from "react";
import { Typewriter } from "react-simple-typewriter";
import homeImage from "/images/home-image2.jpg";

const HomePage = () => {
  return (
    <div className="home-page ">
      <div className="text-container">
        <h1>Hola, soy Ángel Ayón.</h1>
        <p>Programador Web apasionado por la innovación.</p>
      </div>

      {/* Imagen al frente */}
      <div className="image-container">
        <img src={homeImage} alt="Mi Foto" className="profile-image" />
      </div>
      <div className="typewriter-container">
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
