import React from "react";
import MannoLogoBlanco from "../Assets/manno-logo-blanco.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Alianzas() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(101, 127, 246)" }}>
        <nav className="manno-header terms-header">
          <div>
            <Link to={"/"}>
              <img src={MannoLogoBlanco} alt="Manno-Logo" height={30} />
            </Link>
          </div>
        </nav>
        <div className="terms-container">
          <section id="main">
            <div className="terms-inner">
              <section id="one" className="terms-wrapper style1">
                <header className="special">
                  <h2 className="terms-title">
                    (I)Términos, Condiciones Generales de Alianzas Comerciales.
                  </h2>
                </header>
                <div id="terms" className="content">
                  <span className="auto-style3">
                    Los presentes Términos y Condiciones y Políticas de
                    Privacidad Generales de Alianzas Comerciales (los “Términos
                    y Condiciones Generales”) regulan el uso del Chatbot -según
                    se define más adelante- y la relación contractual entre los
                    Clientes y Tecnoexpertos S.A, CUIT:30718496183, con
                    domicilio legal en Francisco Berra N°655, Morón, Provincia
                    de Buenos Aires.
                  </span>
                  <p className="auto-style2">
                    <strong>Definiciones </strong>
                  </p>
                  <p className="auto-style3">
                    En los presentes Términos y Condiciones los siguientes
                    términos tendrán el siguiente significado:
                  </p>
                  <p>
                    <strong>
                      <span className="auto-style3">Tecnoexpertos:</span>
                    </strong>
                    <span className="auto-style3">
                      es Tecnoexpertos S.A, CUIT:30-71849618-3, con domicilio
                      legal en Francisco Berra N°655, Morón, Provincia de Buenos
                      Aires es un proveedor de servicios de instalación y
                      reparación de Productos.
                    </span>
                  </p>
                  <p>
                    &nbsp;
                    <strong>
                      <span className="auto-style3">"Chatbot"</span>
                    </strong>
                    <span className="auto-style3">
                      es un medio informático a través de Whatsapp cuyo objeto
                      es la comunicación con el Usuario a través de texto que
                      utiliza inteligencia artificial (IA) y procesamiento del
                      lenguaje natural (PLN) para comprender preguntas o
                      comandos y proporcionar respuestas automatizadas. El
                      Chatbot puede brindar respuestar a consultas, proporcionar
                      información y concretar la venta de Servicios según lo
                      permitido por Tecnoexpertos
                    </span>
                  </p>
                  
        <div className="terms-bottom-div"></div>
      </div>
    </>
  );
}

export default Alianzas;
