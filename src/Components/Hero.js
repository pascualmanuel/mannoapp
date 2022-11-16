import React from "react";
import Testing from "../testing.css";
import MannoLogo from "../Assets/Hero/logo-horizontal-sinfondo-azul.png";
import Manno from "../Assets/Hero/manno.png";
import Phone from "./UsuariosTab";
import Apple from "../Assets/Hero/apple-svg.svg";
import Google from "../Assets/Hero/google-svg.svg";
// import {Routes, Route} from "react-router-dom";
import {ExternalLink} from "react-external-link";
import {useEffect, useState, useCallback} from "react";
import Pruebas from "./Pruebas";

const MannoBlue = "#5d80ff";
const MannoText = "#646C7C";

const names = [
  "Plomero?",
  "ProfesorDeGuitarra?",
  "Gasista?",
  "Electrisista?",
  "ProfesorDeInglés?",
  "Cerrajero?",
  "TécnicoDeTv?",
  "ProfesorParticular?",
  //   "ProfesorDeInglés?",
  "TécnicoInformatico?",
  "ProfesorParticular?",
  //   "ProfesorParticular?",
];

function Hero() {
  const [newName, setnewName] = useState("Gasista");

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
        <nav className="manno-header">
          <div>
            <img src={MannoLogo} alt="Manno Logo" height={30} />
          </div>
          <div className="puntos">
            <p>Preguntas Frecuentes</p>
            <p style={{marginRight: "45px", marginLeft: "45px"}}>
              Como Funciona
            </p>
          </div>
        </nav>
        <div className="hero-container">
          <section className="flexx">
            <h2 className="alguien-conoce">
              <span style={{color: MannoBlue}}> #AlguienConoce un </span>
              {newName}
            </h2>
            <h1 className="manno-te-salva">
              <img src={Manno} alt="Manno Logo" className="img-manno" /> te
              salva.
            </h1>
            <p className="subtitle-hero">
              Contratá a los mejores expertos y solucioná lo que
              <br className="br"></br> necesitás, sin perder tiempo.
            </p>
            <div className="download">
              <ExternalLink
                href={`https://apps.apple.com/ar/app/manno-soluciones-recomendadas/id1477854373?l=en`}
                target="_blank"
              >
                <img
                  src={Apple}
                  alt="prueba"
                  height={50}
                  style={{marginRight: "20px"}}
                />
              </ExternalLink>
              <ExternalLink
                href={`https://play.google.com/store/apps/details?id=com.app.mannoapp&hl=es_AR&gl=US`}
                target="_blank"
              >
                <img src={Google} alt="prueb" height={50} />
              </ExternalLink>
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
