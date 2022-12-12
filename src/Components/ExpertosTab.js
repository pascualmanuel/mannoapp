import React from "react";
import {Link} from "react-router-dom";
import MannoLogo from "../Assets/Hero/logo-horizontal-sinfondo-azul.png";
import iPhone from "../Assets/Hero/prueba-phine.png";
import iPhoneSvg from "../Assets/Hero/phone-svg.svg";
import Step1 from "../Assets/Steps/step-1.png";
import Step2 from "../Assets/Steps/step-2.png";
import Step3 from "../Assets/Steps/step-3.png";
import Step4 from "../Assets/Steps/step-4.png";
import {Tabs, Tab, Carousel, Card, Stack} from "react-bootstrap";

function ExpertosTabs() {
  return (
    <>
      <Carousel
        slide={false}
        interval={50000}
        nextLabel={"Next"}
        prevLabel={"Previous"}
      >
        <Carousel.Item>
          <Carousel.Caption>
            <div className="container-slider">
              <div className="right-content-margin">
                <img src={Step4} alt="priueba" height={400} />
              </div>
              <div className="slider-right-container">
                {/* <div className="right-slide"> */}
                <div className="left-in-slide">
                  <div className="step-bullet">1</div>
                  <h2 className="slider-h2" style={{fontSize: "23px"}}>
                    Expert@s
                  </h2>
                </div>
                <div className="right-in-slide">
                  <p style={{color: "white"}}>
                    Para poder pedir una manno, bajate la app y creá una cuenta.
                    ¡Es completamente gratis!
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="container-slider">
              <div className="right-content-margin">
                <img src={Step2} alt="priueba" height={400} />
              </div>
              <div className="slider-right-container">
                {/* <div className="right-slide"> */}
                <div className="left-in-slide">
                  <div className="step-bullet">2</div>
                  <h2 className="slider-h2" style={{fontSize: "23px"}}>
                    Cargá tu tarea
                  </h2>
                </div>
                <div className="right-in-slide">
                  <p style={{color: "white"}}>
                    Seleccioná entre las categorías y describí lo que necesitás
                    solucionar.
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="container-slider">
              <div className="right-content-margin">
                <img src={Step3} alt="priueba" height={400} />
              </div>
              <div className="slider-right-container">
                {/* <div className="right-slide"> */}
                <div className="left-in-slide">
                  <div className="step-bullet">3</div>
                  <h2 className="slider-h2" style={{fontSize: "23px"}}>
                    Recibí prewsupuestos
                  </h2>
                </div>
                <div className="right-in-slide">
                  <p style={{color: "white"}}>
                    Y elegí al expert@ indicado para vos.
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="container-slider">
              <div className="right-content-margin">
                <img src={Step4} alt="priueba" height={400} />
              </div>
              <div className="slider-right-container">
                {/* <div className="right-slide"> */}
                <div className="left-in-slide">
                  <div className="step-bullet">4</div>
                  <h2 className="slider-h2" style={{fontSize: "23px"}}>
                    Contratá
                  </h2>
                </div>
                <div className="right-in-slide">
                  <p style={{color: "white"}}>
                    Chateá con el expert@ y coordiná los detalles.
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="container-slider">
              <div className="right-content-margin">
                <img src={Step3} alt="priueba" height={400} />
              </div>
              <div className="slider-right-container">
                {/* <div className="right-slide"> */}
                <div className="left-in-slide">
                  <div className="step-bullet">5</div>
                  <h2 className="slider-h2" style={{fontSize: "23px"}}>
                    Valorá
                  </h2>
                </div>
                <div className="right-in-slide">
                  <p style={{color: "white"}}>
                    Cuando soluciones tu problema, compartí tu experiencia y
                    dale un puntaje a tu expert@.
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ExpertosTabs;
