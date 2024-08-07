import React from "react";
import { Link } from "react-router-dom";
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
      <div className="container-footer" style={{ backgroundColor: "#657FF6" }}>
        <div className="max-2000">
          <div style={{ height: "120px" }}></div>
          <div
            className="up-conteiner-footer"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <h2 style={{ color: "white" }}>Descarga la app</h2>
            <div style={{ marginTop: "8px" }}>
              <a
                href={`https://apps.apple.com/ar/app/manno-soluciones-recomendadas/id1477854373?l=en`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Apple}
                  alt="Apple"
                  style={{ marginRight: "20px" }}
                  className="footer-download-icon"
                />
              </a>
              <a
                href={`https://play.google.com/store/apps/details?id=com.app.mannoapp&hl=es_AR&gl=US`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Google}
                  alt="Google"
                  className="footer-download-icon"
                />
              </a>
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
                <Link to={"/terms"}>
                  Términos, condiciones y políticas de privacidad.
                </Link>
              </p>

              <p style={{ color: "#5d80ff" }}>
                <a href="mailto:hola@mannoapp.com" style={{ color: "#5d80ff" }}>
                  hola@mannoapp.com
                </a>
              </p>
            </div>
            <div>
              <a
                href="https://www.facebook.com/mannoapp"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} alt="Facebook" className="sm-icon" />
              </a>
              <a
                href="https://www.instagram.com/manno.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Facebook} alt="Instagram" className="sm-icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/manno/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Linkedin} alt="Linkedin" className="sm-icon" />
              </a>
            </div>
          </div>
          <div className="mobile-footer">
            <p
              style={{ color: "white", fontSize: "14px", marginBottom: "2rem" }}
            >
              <a href="mailto:hola@mannoapp.com" id="tyc-link">
                hola@mannoapp.com
              </a>
            </p>
            <p
              style={{
                color: "white",
                fontSize: "12px",
              }}
            >
              <Link to={"/terms"}>
                <span style={{ color: "white" }}>
                  {" "}
                  Términos, condiciones y políticas de privacidad.
                </span>
              </Link>
            </p>
          </div>
          <div style={{ height: "100px" }}></div>
        </div>
      </div>
    </>
  );
}

export default Phone;
