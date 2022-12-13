import React from "react";
import HogarIcon from "../Assets/Categories/casita.png";
import ClasesIcon from "../Assets/Categories/clases.png";
import ArreglatodoIcon from "../Assets/Categories/pibitos.png";
import TecnoIcon from "../Assets/Categories/celu.png";

function Categories() {
  return (
    <>
      <div className="background-categories">
        <div className="categories-container">
          <div className="categories-left-container">
            <p style={{marginBottom: "15px"}}>¿Necesitás una mano?</p>
            <h2>
              <span style={{color: "#5d80ff"}}> Cuatro </span>
              categorías de expert@s, <br></br>una sola app.
            </h2>
            <p style={{marginTop: "10px"}}>
              Contactá expert@s en tareas para el hogar,&nbsp;
              <br className="br-right-p-categories" />
              profes, gurús de la tecnología o handys{" "}
              <br className="br-right-p-categories" /> arreglatodo.
            </p>
          </div>
          <div className="categories-right-container">
            <div className="box-container">
              <div className="box">
                <img
                  src={HogarIcon}
                  alt="prueb"
                  width={65}
                  style={{
                    marginLeft: "17px",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                />
                <h2 style={{marginLeft: "20px", fontSize: "24px"}}>Hogar</h2>
                <p
                  style={{
                    marginLeft: "17px",
                    marginTop: "8px",
                    marginRight: "20px",
                    // fontSize: "15px",
                  }}
                >
                  Contactá al expert@ ideal para resolver cualquier imprevisto
                  en tu hogar.
                </p>
              </div>
              <div className="box">
                <img
                  src={TecnoIcon}
                  alt="prueb"
                  width={65}
                  style={{
                    marginLeft: "17px",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                />
                <h2 style={{marginLeft: "20px", fontSize: "24px"}}>
                  Tecnología
                </h2>
                <p
                  style={{
                    marginLeft: "20px",
                    marginTop: "8px",
                    marginRight: "20px",
                    // fontSize: "15px",
                  }}
                >
                  Elegí entre los mejores expert@s en celulares, tablets o
                  computadoras.
                </p>
              </div>
              <div className="box">
                <img
                  src={ClasesIcon}
                  alt="prueb"
                  width={65}
                  style={{
                    marginLeft: "17px",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                />
                <h2 style={{marginLeft: "20px", fontSize: "24px"}}>Clases</h2>
                <p
                  style={{
                    marginLeft: "20px",
                    marginTop: "8px",
                    marginRight: "20px",
                    // fontSize: "15px",
                  }}
                >
                  Potenciá tu canto, tu inglés, o tu entrenamiento físico! Está
                  en tus manos.
                </p>
              </div>
              <div className="box">
                <img
                  src={ArreglatodoIcon}
                  alt="prueb"
                  width={65}
                  style={{
                    marginLeft: "17px",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                />
                <h2 style={{marginLeft: "20px", fontSize: "24px"}}>
                  Arreglatodo
                </h2>
                <p
                  style={{
                    marginLeft: "20px",
                    marginTop: "8px",
                    marginRight: "20px",
                    // fontSize: "15px",
                  }}
                >
                  Esta categoría no la entiendo muy bien todavía. Pero acá va un
                  breve texto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
