import React from "react";
import {Link} from "react-router-dom";
import MannoLogo from "../Assets/Hero/logo-horizontal-sinfondo-azul.png";
import Manno from "../Assets/Hero/manno.png";

import Apple from "../Assets/Hero/apple-svg.svg";
import Google from "../Assets/Hero/google-svg.svg";
import Personaje from "../Assets/experto-personaje copy.webp";
// import Iconuno from "../Assets/icon-cal.svg";
// import Icondos from "../Assets/icon-cert.svg";
// import Icontres from "../Assets/icon-money.svg";
import IconCal from "../Assets/icon-1.svg";
import IconCert from "../Assets/icon-2.svg";
import IconMon from "../Assets/icon-3.svg";

// import {Routes, Route} from "react-router-dom";

let os = "Unknown";

// if (navigator.appVersion.indexOf("Win") != -1) os = "Windows";
// if (navigator.appVersion.indexOf("Mac") != -1) os = "MacOS";
// if (navigator.appVersion.indexOf("Linux") != -1) os = "Linuxxxx";
// if (navigator.appVersion.indexOf("X11") != -1) os = "UNIX";
// console.log(os);

function Hero() {
  return (
    <>
      <div className="cont-expertos">
        <div className="expertos">
          <div className="left-expertos">
            <p style={{fontSize: "18px"}}>Expert@s</p>
            <h2 className="expertos-title">
              Trabajá cuando quieras, <br></br> de lo que quieras.
            </h2>

            <div className="text-icon-experto">
              <img
                src={IconCal}
                alt="ef"
                width={20}
                style={{marginRight: "10px", marginBottom: "18px"}}
              />
              <p style={{fontSize: "18px"}}>
                Ganá dinero extra en tu tiempo libre.
              </p>
            </div>
            <div className="text-icon-experto">
              <img
                src={IconCert}
                alt="ef"
                width={20}
                style={{marginRight: "10px", marginBottom: "18px"}}
              />
              <p style={{fontSize: "18px"}}>
                Ampliá tu red de contactos y crecé profesionalmente.
              </p>
            </div>
            <div className="text-icon-experto">
              <img
                src={IconMon}
                alt="ef"
                width={20}
                style={{marginRight: "10px", marginBottom: "18px"}}
              />
              <p style={{fontSize: "18px"}}>
                {" "}
                Aprovechá miles de oportunidades, gratis.
              </p>
            </div>
            <Link to={""}>
              <div className="button-experto">
                <span style={{color: "#5d80ff", fontFamily: "Book"}}>
                  Quiero ser expert@
                </span>
              </div>
            </Link>
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
