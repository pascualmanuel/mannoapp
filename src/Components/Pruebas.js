import React, {useState} from "react";
import Step1 from "../Assets/Steps/step-1.png";
import Step2 from "../Assets/Steps/step-2.png";
import Step3 from "../Assets/Steps/step-3.png";
import Step4 from "../Assets/Steps/step-4.png";
import Prueba from "../Assets/apple-iphone.png";
// import Step5 from "../../Assets/Steps/step-5.png";

function Pruebas() {
  const [bgColour, setBgColour] = useState(Step1);
  // const [bgBorder, setBgBorder] = useState();

  const changeImageStyle = {
    height: "500px",
    width: "210px",
    // backgroundImg: `${bgColour}`,
    backgroundImage: "url(" + bgColour + ")",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    // transition: "1s",
    cursor: "default",
  };

  const comoFuncionaStyle = {
    fontSize: "20px",
    borderRadius: "40px",
    border: "1px solid red",
    color: "white",
    background: "#c83f49",
    cursor: "default",
  };

  return (
    <>
      <div className="container-h-i-w">
        <div>
          <div
            className="probi"
            onMouseEnter={() => setBgColour(Step1)}
            onMouseLeave={() => setBgColour(Step1)}
          >
            <div className="bullet-hiw">1</div>
            <section style={{marginLeft: "60px"}}>
              <h3 className="title-hiw"> Cargá tu tarea</h3>
              <p className="text-hiw">
                Seleccioná entre las categorías y describí lo que necesitás
                solucionar.
              </p>
            </section>
          </div>
          <div
            className="probi"
            onMouseEnter={() => setBgColour(Prueba)}
            onMouseLeave={() => setBgColour(Prueba)}
          >
            <div className="bullet-hiw">3</div>

            <section style={{marginLeft: "60px"}}>
              <h3 className="title-hiw"> Contratá</h3>
              <p className="text-hiw">
                Chateá con el experto y coordiná los detalles.
              </p>
            </section>
          </div>
        </div>

        <div className="App" style={changeImageStyle}></div>
        <div>
          <div
            className="probi"
            onMouseEnter={() => setBgColour(Step3)}
            onMouseLeave={() => setBgColour(Step3)}
          >
            <div className="bullet-hiw">2</div>
            <section style={{marginLeft: "60px"}}>
              <h3 className="title-hiw"> Recibí presupuestos</h3>
              <p className="text-hiw">Y elegí al expert@ indicado para vos.</p>
            </section>
          </div>
          <div
            className="probi"
            onMouseEnter={() => setBgColour(Step4)}
            onMouseLeave={() => setBgColour(Step4)}
          >
            <div className="bullet-hiw">4</div>
            <section style={{marginLeft: "60px"}}>
              <h3 className="title-hiw"> Valorá</h3>
              <p className="text-hiw">
                Cuando soluciones tu problema, compartí tu experiencia y dale un
                puntaje a tu expert@.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pruebas;
