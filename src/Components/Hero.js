import React from "react";
import Testing from "../testing.css";
import MannoLogo from "../Assets/Hero/logo-horizontal-sinfondo-azul.png";
import Manno from "../Assets/Hero/manno.png";
import Phone from "./UsuariosTab";
import Apple from "../Assets/Hero/apple-svg.svg";
import Apple2 from "../Assets/Hero/boton-apple.svg";
import Google2 from "../Assets/Hero/boton-google.svg";
import Google from "../Assets/Hero/google-svg.svg";
import Isologo from "../Assets/Hero/isologo-background-hero.png";
import {Link} from "react-router-dom";

import {ExternalLink} from "react-external-link";
import {useEffect, useState, useCallback} from "react";
import Pruebas from "./PhoneVideo";

const MannoBlue = "#5d80ff";
const MannoText = "#646C7C";

const names = [
  "Pintor?",
  "Arreglatodo?",
  "Electricista?",
  "Profesor?",
  "Plomero?",
];

function Hero() {
  const [newName, setnewName] = useState("Pintor?");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1600);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <>
      <div className="fondo">
        <div className="logo-mobile">
          <img src={Isologo} alt="logo" width={50} />
        </div>
        <nav className="manno-header">
          <div>
            <img src={MannoLogo} alt="Manno Logo" height={30} />
          </div>
          <div className="puntos">
            <a href={"#faq"}>
              <p>Preguntas Frecuentes</p>
            </a>
            <a href={"#como-funciona"}>
              <p style={{marginRight: "45px", marginLeft: "45px"}}>
                ¿Cómo funciona?
              </p>
            </a>
          </div>
        </nav>
        <div className="hero-container">
          <section className="flexx" style={{width: "100%"}}>
            <h2 className="alguien-conoce">
              <span style={{color: MannoBlue}}> #AlguienConoceUn </span>
              {newName}
            </h2>
            <h1 className="manno-te-salva">
              <img src={Manno} alt="Manno Logo" className="img-manno" />
              &nbsp;te salva.
            </h1>
            <p className="subtitle-hero">
              Cambia tu froma de solucionar. Encuetra a los Expertos
              <br className="br"></br> más recomendados y soluciona lo que
              necesites,<br className="br"></br> sin perder el tiempo.
            </p>
            <div className="download-cont">
              <div className="download">
                <ExternalLink
                  href={`https://smart.link/1fadhmjx04pjq`}
                  target="_blank"
                >
                  <img
                    className="download-icons"
                    src={Apple2}
                    alt="Apple"
                    height={50}
                    style={{marginRight: "20px"}}
                  />
                </ExternalLink>
                <ExternalLink
                  href={`https://smart.link/1fadhmjx04pjq`}
                  target="_blank"
                >
                  <img src={Google2} alt="Google" className="download-icons" />
                </ExternalLink>
              </div>
            </div>
          </section>

          <div>
            <Pruebas />
          </div>
        </div>
      </div>
      {/* <div className="elipse-cont">
        <div className="elipse"> </div>
        <div className="elipse2"></div>
      </div> */}

      <div className="bubbles-cont">
        <div className="bubble-left"> </div>
        <div className="bubble-right-cont">
          <div className="bubble-right-one"> </div>
          <div className="bubble-right-two"> </div>
          <div className="bubble-right-three"> </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
