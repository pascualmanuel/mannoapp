import React from "react";
import ArreglatodoIcon from "../../Assets/Hero/arreglatodo-icon.png";
import HogarIcon from "../../Assets/Hero/hogar-icono.png";
import TecnoIcon from "../../Assets/Hero/tecno-icon.png";
import ClasesIcon from "../../Assets/Hero/clases-icon.png";

import Step1 from "../../Assets/Steps/step-1.png";
import Step2 from "../../Assets/Steps/step-2.png";
import Step3 from "../../Assets/Steps/step-3.png";
import Step4 from "../../Assets/Steps/step-4.png";
import Step5 from "../../Assets/Steps/step-5.png";
import {Tabs, Tab, Carousel, Card, Stack} from "react-bootstrap";

import Phone from "../UsuariosTab";

import "./Tabs.css";
import Usuario from "../UsuariosTab";
import ExpertosTabs from "../ExpertosTab";

function TabsComp() {
  // const mama = Google;

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <h2 className="como-funciona-h2"> ¿Cómo funciona?</h2>
      <Tabs fill>
        <Tab
          eventKey="Quiero solucionar algo"
          title="Quiero solucionar algo"
          id="hola-tas-ahi?"
        >
          <Usuario />
        </Tab>
        <Tab id="bla" eventKey="Expertos" title="Expertos">
          <ExpertosTabs />
        </Tab>
      </Tabs>
    </>
  );
}

export default TabsComp;
