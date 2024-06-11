import React, { useState } from "react";
import Step1 from "../Assets/Steps/expert-step1.webp";
import Step2 from "../Assets/Steps/expert-step2.webp";
import Step3 from "../Assets/Steps/expert-step3.webp";
import Step4 from "../Assets/Steps/expert-step4.webp";

function ComoFuncionaExperto() {
  const [bgColour, setBgColour] = useState(Step1);
  const [activeStep, setActiveStep] = useState(1);

  const changeImageStyle = {
    height: "500px",
    width: "210px",
    backgroundImage: "url(" + bgColour + ")",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    cursor: "default",
  };

  const getBorderStyle = (stepNumber) => {
    return stepNumber === activeStep ? "solid 1px white" : "";
  };

  return (
    <>
      <div className="container-hiw">
        <div>
          <div>
            <div
              style={{ border: getBorderStyle(1) }}
              className="step-cont-hiw"
              onMouseEnter={() => {
                setBgColour(Step1);
                setActiveStep(1);
              }}
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
          <div>
            <div
              style={{ border: getBorderStyle(2) }}
              className="step-cont-hiw"
              onMouseEnter={() => {
                setBgColour(Step2);
                setActiveStep(2);
              }}
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
                  <h3 className="title-hiw">Chatea</h3>
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
          <div>
            <div
              style={{ border: getBorderStyle(3) }}
              className="step-cont-hiw"
              onMouseEnter={() => {
                setBgColour(Step3);
                setActiveStep(3);
              }}
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
                  <h3 className="title-hiw">Chatea</h3>
                  <p className="text-hiw">
                    Coordina con tus clientes los detalles de tus Tareas.
                  </p>
                </span>
              </section>
            </div>
          </div>
          <div>
            <div
              style={{ border: getBorderStyle(4) }}
              className="step-cont-hiw"
              onMouseEnter={() => {
                setBgColour(Step4);
                setActiveStep(4);
              }}
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
    </>
  );
}

export default ComoFuncionaExperto;
