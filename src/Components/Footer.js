import React from "react";
import {ExternalLink} from "react-external-link";
import {Link} from "react-router-dom";
// import Terms from "./Terms";

import Apple from "../Assets/Hero/apple-webp.webp";
import Google from "../Assets/Hero/google-webp.webp";
import Facebook from "../Assets/instagram.svg";
import Instagram from "../Assets/facebook.svg";
import Linkedin from "../Assets/linkedin.svg";
import "../index.css";
import Logo from "../Assets/Hero/isologo-background-hero.png";

function Phone() {
  return (
    <>
      <div className="container-footer" style={{backgroundColor: "#657FF6"}}>
        <div style={{height: "120px"}}></div>
        <div
          className="up-conteiner-footer"
          style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}}
        >
          <h2 style={{color: "white"}}>Descargá la app</h2>
          <div style={{marginTop: "8px"}}>
            <ExternalLink
              href={`https://apps.apple.com/ar/app/manno-soluciones-recomendadas/id1477854373?l=en`}
              target="_blank"
            >
              <img
                src={Apple}
                alt="Apple"
                style={{marginRight: "20px"}}
                className="footer-download-icon"
              />
            </ExternalLink>
            <ExternalLink
              href={`https://play.google.com/store/apps/details?id=com.app.mannoapp&hl=es_AR&gl=US`}
              target="_blank"
            >
              <img src={Google} alt="Google" className="footer-download-icon" />
            </ExternalLink>
          </div>
        </div>

        <div className="down-conteiner-footer">
          <div>
            <Link to={"/"}>
              <img src={Logo} alt="Logo" className="logo-footer" />
            </Link>
          </div>
          <div className="footer-p">
            <p className="footer-tyc">
              <Link to={"/terms"}>Términos y condiciones</Link>
            </p>
            <p className="footer-priv">Privacidad</p>
            <p style={{color: "#5d80ff"}}>
              <a href="mailto:ayuda@manno.com" style={{color: "#5d80ff"}}>
                ayuda@manno.com
              </a>
            </p>
          </div>
          <div>
            <img
              src={Facebook}
              alt="Facebook"
              className="sm-icon"

              // style={{marginRight: "30px"}}
            />
            <img
              src={Instagram}
              alt="Instagram"
              className="sm-icon"

              // style={{marginRight: "30px"}}
            />
            <img src={Linkedin} alt="Linkedin" className="sm-icon" />
          </div>
        </div>
        <div className="mobile-footer">
          <p style={{color: "white", fontSize: "14px", marginBottom: "2rem"}}>
            <a href="mailto:ayuda@manno.com" id="tyc-link">
              ayuda@manno.com
            </a>
          </p>
          <p
            style={{
              color: "white",
              fontSize: "12px",
            }}
          >
            <a
              href="https://mannoapp.com/terminos.html"
              id="tyc-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Términos y condiciones
            </a>
            <span style={{marginLeft: "40px"}}>Privacidad</span>
          </p>
        </div>
        <div style={{height: "100px"}}></div>
      </div>
    </>
  );
}

export default Phone;
