import React, { useState } from "react";
import Step1 from "../Assets/Steps/user-step1.webp";
import Step2 from "../Assets/Steps/user-step2.webp";
import Step3 from "../Assets/Steps/user-step3.webp";
import Step4 from "../Assets/Steps/user-step4.webp";

function ComoFuncionaUsuario() {
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
                <h3 className="title-hiw">Carga tu Tarea</h3>
                <p className="text-hiw">
                  Selecciona entre las categorías y describe lo que necesitas.
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
                  <h3 className="title-hiw">Recibe presupuestos</h3>
                  <p className="text-hiw">Y elige a tu Experto ideal.</p>
                </span>
                <span className="desktop-bullet">
                  <h3 className="title-hiw">Contrata</h3>
                  <p className="text-hiw">
                    Chatea con tu Experto y coordina los detalles.
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
                  <h3 className="title-hiw">Recibe presupuestos</h3>
                  <p className="text-hiw">Y elige a tu Experto ideal.</p>
                </span>
                <span className="mobile-bullet">
                  <h3 className="title-hiw">Contrata</h3>
                  <p className="text-hiw">
                    Chatea con tu Experto y coordina los detalles.
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
                <h3 className="title-hiw">Califica y Recomienda</h3>
                <p className="text-hiw">
                  Cuéntanos cómo te ha ido y ayuda a toda la comunidad Manno.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComoFuncionaUsuario;
