import React, {useState} from "react";
import Step1 from "../Assets/Steps/step-1.png";
import Step2 from "../Assets/Steps/step-2.png";
import Step3 from "../Assets/Steps/step-3.png";
import Step4 from "../Assets/Steps/step-4.png";
import Prueba from "../Assets/apple-iphone.png";
import {Tabs, Tab} from "react-bootstrap";
// import Step5 from "../../Assets/Steps/step-5.png";

function ComoFuncionaExperto() {
  const [bgColour, setBgColour] = useState(Step1);
  const [bgBorder, setBgBorder] = useState("solid 1px white");

  const changeImageStyle = {
    height: "500px",
    width: "210px",
    // backgroundImg: `${bgColour}`,
    backgroundImage: "url(" + bgColour + ")",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",

    cursor: "default",
  };

  // const active = {
  //   border: "solid 2px red",
  // };

  const changeBorder = {
    border: bgBorder,
  };

  // const comoFuncionaStyle = {
  //   fontSize: "20px",
  //   borderRadius: "40px",
  //   border: "1px solid red",
  //   color: "white",
  //   background: "#c83f49",
  //   cursor: "default",

  // };

  return (
    <>
      {/* <div className="full-container-hiw"> */}

      <div className="container-hiw">
        <div>
          <div
            onMouseEnter={() => setBgBorder("")}
            onMouseLeave={() => setBgBorder("")}
          >
            <div
              style={changeBorder}
              className="step-cont-hiw"
              onMouseEnter={() => setBgColour(Step1)}
              onMouseLeave={() => setBgColour(Step1)}
            >
              <div className="bullet-hiw">1</div>
              <section className="step-cont-section">
                <h3 className="title-hiw">Completa tu perfil</h3>
                <p className="text-hiw">
                  Regístrate en las categorías en las que desees trabajar y
                  agrega una descripción detallada de tu experiencia.
                </p>
              </section>
            </div>
          </div>
          <div
            // style={changeBorder}
            onMouseEnter={() => setBgBorder("")}
            onMouseLeave={() => setBgBorder("")}
          >
            <div
              className="step-cont-hiw"
              onMouseEnter={() => setBgColour(Step2)}
              onMouseLeave={() => setBgColour(Step2)}
            >
              <div className="bullet-hiw">
                <span className="desktop-bullet">3</span>
                <span className="mobile-bullet">2</span>
              </div>

              <section className="step-cont-section">
                <span className="mobile-bullet">
                  <h3 className="title-hiw">Presupuesta</h3>
                  <p className="text-hiw">
                    Envía tus presupuestos en las Tareas recibidas y consigue
                    nuevos clientes todos los días.
                  </p>
                </span>
                <span className="desktop-bullet">
                  <h3 className="title-hiw"> Chatea</h3>
                  <p className="text-hiw">
                    Coordina con tus clientes los detalles de tus Tareas.
                  </p>
                </span>
              </section>
            </div>
          </div>
        </div>

        <div className="phone-hiw" style={changeImageStyle}></div>
        <div>
          <div
            // style={changeBorder}
            onMouseEnter={() => setBgBorder("")}
            onMouseLeave={() => setBgBorder("")}
          >
            <div
              className="step-cont-hiw"
              onMouseEnter={() => setBgColour(Step3)}
              onMouseLeave={() => setBgColour(Step3)}
            >
              <div className="bullet-hiw">
                <span className="desktop-bullet">2</span>
                <span className="mobile-bullet">3</span>
              </div>
              <section className="step-cont-section">
                <span className="desktop-bullet">
                  <h3 className="title-hiw">Presupuesta</h3>
                  <p className="text-hiw">
                    Envía tus presupuestos en las Tareas recibidas y consigue
                    nuevos clientes todos los días.
                  </p>
                </span>
                <span className="mobile-bullet">
                  <h3 className="title-hiw"> Chatea</h3>
                  <p className="text-hiw">
                    Coordina con tus clientes los detalles de tus Tareas.
                  </p>
                </span>
              </section>
            </div>
          </div>
          <div
            // style={changeBorder}
            onMouseEnter={() => setBgBorder("")}
            onMouseLeave={() => setBgBorder("")}
          >
            <div
              className="step-cont-hiw"
              onMouseEnter={() => setBgColour(Step4)}
              onMouseLeave={() => setBgColour(Step4)}
            >
              <div className="bullet-hiw">4</div>
              <section className="step-cont-section">
                <h3 className="title-hiw">Solicita tu clasificación</h3>
                <p className="text-hiw">
                  Recuérdale a tu cliente que te califique para sumar
                  experiencia y destacarte como Experto dentro de la App.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default ComoFuncionaExperto;
