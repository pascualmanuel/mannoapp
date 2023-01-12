import React from "react";
import Personaje from "../Assets/experto-personaje.webp";

function Hero() {
  return (
    <>
      <div className="cont-expertos">
        <div className="expertos">
          <div className="left-expertos">
            <p style={{fontSize: "18px"}}>Expertos</p>
            <h2 className="expertos-title">
              Consigue nuevos Clientes <br></br> todos los días.
            </h2>

            <div className="text-icon-experto">
              <p style={{fontSize: "19px"}}>
                Manno llegó para democratizar la forma de obtener&nbsp;
                <br className="br" />
                nuevos clientes, donde lo más importante es la
                <br className="br" /> calidad de tu trabajo.
              </p>
            </div>

            <a
              href="https://smart.link/1fadhmjx04pjq"
              target="_blank"
              rel="noreferrer"
            >
              <div className="button-experto">
                <span style={{color: "#5d80ff", fontFamily: "Book"}}>
                  Quiero ser Experto
                </span>
              </div>
            </a>
          </div>
          <div className="right-expertos">
            <img
              src={Personaje}
              className="photo-experto"
              alt="personaje"
              width={330}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
