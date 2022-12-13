import React from "react";
import {ReactDOM} from "react";
import Step1 from "../../Assets/Steps/step-1.png";
import Step2 from "../../Assets/Steps/step-2.png";
import Step3 from "../../Assets/Steps/step-3.png";
import Step4 from "../../Assets/Steps/step-4.png";
import Step5 from "../../Assets/Steps/step-5.png";
import UserIcon from "../../Assets/usuario-icon.svg";
import {Tabs, Tab} from "react-bootstrap";

import Phone from "../UsuariosTab";
import "./TabsCopy.css";

import Usuario from "../UsuariosTab";
import ExpertosTabs from "../ExpertosTab";
import ComoFuncionaUsuario from "../ComoFuncionaUsuario";
import ComoFuncionaExperto from "../ComoFuncionaExperto";

function TabsComp() {
  // const mama = Google;

  // const titulo = <img src={UserIcon} alt="sog" />;
  const titulo = {
    texto: "Usuari@",
  };

  return (
    <>
      <div className="full-container-hiw" id="como-funciona">
        <div className="content-hiw-flex">
          <div className="hr-hiw"></div>
          <h2 className="h2-hiw">¿Cómo Funciona?</h2>
          <Tabs fill transition={false}>
            <Tab
              // style={{color: "red"}}z
              eventKey="Quiero solucionar algo"
              // title={`${titulo} ds`}
              // title={<div className="bullet-hiw">1 </div> + titulo.texto}
              title={
                <React.Fragment>
                  <h4
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Book",
                      fontSize: "15px",
                      paddingTop: "7px",
                    }}
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="18.8px"
                      height="18.8px"
                      viewBox="0 0 64 64"
                      fill="currentColor"

                      // style={{enableBackground: "new 0 0 12.8 12.8";}}
                      // xml:space="preserve"
                    >
                      <g>
                        <path d="M48,36.8c0-2.7-2.1-4.8-4.8-4.8H20.8c-2.7,0-4.8,2.1-4.8,4.8v1.6c0,6.3,6,12.8,16,12.8s16-6.5,16-12.8V36.8z" />
                        <circle cx="32" cy="20" r="8.8" />
                        <path
                          d="M64,32c0,17.7-14.3,32-32,32S0,49.7,0,32S14.3,0,32,0S64,14.3,64,32z M59.1,32C59.1,17,47,4.9,32,4.9S4.9,17,4.9,32
		S17,59.1,32,59.1S59.1,47,59.1,32z"
                        />
                      </g>
                    </svg>
                    <span style={{marginLeft: "10px"}}>Usuari@s</span>
                  </h4>
                </React.Fragment>
              }
            >
              <ComoFuncionaUsuario />
            </Tab>
            <Tab
              id="bla"
              eventKey="Expertos"
              tabClassName="tabclass"
              title={
                <React.Fragment>
                  <h4
                    style={{
                      whiteSpace: "nowrap",
                      fontFamily: "Book",
                      fontSize: "15px",
                      paddingTop: "7px",
                    }}
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="18.8px"
                      height="18.8px"
                      viewBox="0 0 18 18"
                      fill="currentColor"

                      // style={{enableBackground: "new 0 0 12.8 12.8";}}
                      // xml:space="preserve"
                    >
                      <path d="M12.5415 0.666504C12.3048 0.666504 12.0883 0.800254 11.9825 1.012L11.1492 2.67866C11.0557 2.86557 11.0618 3.08682 11.1655 3.26825L11.9165 4.58248V8.99984H11.2915C10.9463 8.99984 10.6665 9.27967 10.6665 9.62484V14.4165C10.6665 16.0273 11.9723 17.3332 13.5832 17.3332C15.194 17.3332 16.4998 16.0273 16.4998 14.4165V9.62484C16.4998 9.27967 16.22 8.99984 15.8748 8.99984H15.2498V4.58248L16.0008 3.26825C16.1045 3.08682 16.1107 2.86557 16.0172 2.67866L15.1838 1.012C15.078 0.800254 14.8616 0.666504 14.6248 0.666504H12.5415ZM13.9998 8.99984H13.1665V4.4165C13.1665 4.30774 13.1381 4.20085 13.0842 4.10642L12.4168 2.9385L12.9278 1.9165H14.2386L14.7496 2.9385L14.0822 4.10642C14.0283 4.20085 13.9998 4.30774 13.9998 4.4165V8.99984ZM11.9165 14.4165V12.3332H15.2498V14.4165C15.2498 15.337 14.5037 16.0832 13.5832 16.0832C12.6627 16.0832 11.9165 15.337 11.9165 14.4165ZM15.2498 11.0832H11.9165V10.2498H15.2498V11.0832ZM6.93844 0.779429C6.74596 0.703121 6.52819 0.727079 6.3569 0.843421C6.18563 0.959762 6.08309 1.15338 6.08309 1.36043V4.4164C6.08309 4.87664 5.70999 5.24974 5.24975 5.24974C4.78951 5.24974 4.41642 4.87664 4.41642 4.4164V1.3605C4.41642 1.15345 4.31387 0.959821 4.14259 0.843487C3.9713 0.727146 3.75351 0.703187 3.56104 0.779512C1.86655 1.45144 0.666504 3.10557 0.666504 5.0415C0.666504 6.81155 1.66973 8.346 3.13675 9.10959V15.2199C3.13675 16.3869 4.0828 17.333 5.24984 17.333C6.41686 17.333 7.36292 16.3869 7.36292 15.2199V9.10959C8.82992 8.346 9.83317 6.81155 9.83317 5.0415C9.83317 3.1055 8.633 1.4513 6.93844 0.779429ZM7.33309 4.4164V2.43903C8.09559 3.05026 8.58317 3.98936 8.58317 5.0415C8.58317 6.43823 7.72392 7.63575 6.50283 8.1315C6.26712 8.22717 6.11293 8.45617 6.11293 8.71059V15.2199C6.11293 15.6966 5.72651 16.083 5.24984 16.083C4.77316 16.083 4.38675 15.6966 4.38675 15.2199V8.71059C4.38675 8.45617 4.23255 8.22717 3.99685 8.1315C2.77575 7.63575 1.9165 6.43823 1.9165 5.0415C1.9165 3.98945 2.40402 3.0504 3.16642 2.43917V4.4164C3.16642 5.567 4.09915 6.49974 5.24975 6.49974C6.40035 6.49974 7.33309 5.567 7.33309 4.4164Z" />
                    </svg>
                    <span style={{marginLeft: "10px"}}>Expert@s</span>
                  </h4>
                </React.Fragment>
              }
            >
              <ComoFuncionaExperto />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default TabsComp;
