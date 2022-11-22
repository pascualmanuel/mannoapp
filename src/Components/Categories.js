import React from "react";
import HogarIcon from "../Assets/Hero/hogar-icono.png";
import ClasesIcon from "../Assets/Hero/clases-icon.png";
import ArreglatodoIcon from "../Assets/Hero/arreglatodo-icon.png";
import TecnoIcon from "../Assets/Hero/tecno-icon.png";

function Categories() {
  return (
    <>
      <div className="background-categories">
        <div className="categories-container">
          <div className="categories-left-container">
            <p style={{marginBottom: "15px"}}>¿Necesitás una mano?</p>
            <h2>
              <span style={{color: "#5d80ff"}}> Cuatro </span>
              categorías de expertos, <br></br>una sola app.
            </h2>
            <p style={{marginTop: "30px"}}>
              Contactá expertos en tareas para el hogar,{" "}
              <br className="br-right-p-categories" />
              profes, gurús de la tecnología o handys arreglatodo.
            </p>
          </div>
          <div className="categories-right-container">
            <div className="box">
              <img
                src={HogarIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px", marginTop: "5px"}}
              />
              <h2 style={{marginLeft: "20px", fontSize: "20px"}}>Hogar</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                  fontSize: "15px",
                }}
              >
                Contactá al experto ideal para resolver cualquier imprevisto en
                tu hogar.
              </p>
            </div>
            <div className="box">
              <img
                src={TecnoIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px", marginTop: "5px"}}
              />
              <h2 style={{marginLeft: "20px", fontSize: "20px"}}>Tecnología</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                  fontSize: "15px",
                }}
              >
                Elegí entre los mejores expertos en celulares, tablets o
                computadoras.
              </p>
            </div>
            <div className="box">
              <img
                src={ClasesIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px", marginTop: "5px"}}
              />
              <h2 style={{marginLeft: "20px", fontSize: "20px"}}>Clases</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                  fontSize: "15px",
                }}
              >
                Potenciá tu canto, tu inglés, o tu entrenamiento físico! Está
                todo en tus manos.
              </p>
            </div>
            <div className="box">
              <img
                src={ArreglatodoIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px", marginTop: "5px"}}
              />
              <h2 style={{marginLeft: "20px", fontSize: "20px"}}>
                Arreglatodo
              </h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                  fontSize: "15px",
                }}
              >
                Esta categoría no la entiendo muy bien todavía. Pero acá va un
                breve texto descriptivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
