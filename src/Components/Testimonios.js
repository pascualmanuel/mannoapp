import React, {useState} from "react";
import ArreglatodoIcon from "../Assets/Hero/arreglatodo-icon.png";
import HogarIcon from "../Assets/Hero/hogar-icono.png";
import TecnoIcon from "../Assets/Hero/tecno-icon.png";
import ClasesIcon from "../Assets/Hero/clases-icon.png";
import {Tabs, Tab, Carousel, Card, Stack} from "react-bootstrap";

const Testimonios = () => {
  const kvArray = [
    {
      value: 1,
      name: "Felipe",
      message:
        "Logré arreglar la cañería del baño en tiempo record! Ricardo fue muy amable, todo funcionó perfecto.",
    },
    {
      value: 2,
      name: "Martin",
      message:
        "Tenía la pantalla del celu rota hace años y Kevin me la arregló en 15 minutos. Manno es un lujo!!",
    },
    {
      value: 3,
      name: "Juana",
      message:
        "Tuve mi primera entrevista en inglés y conseguí el laburo gracias a Josephine que me dió una manno!",
    },
    {
      value: 4,
      name: "Adriana",
      message:
        "Logré arreglar la cañería del baño en tiempo record! Ricardo fue muy amable, todo funcionó perfecto.",
    },
  ];

  const kvArrayDos = [
    {
      value: 5,
      name: "Marcela",
      message:
        "Logré arreglar la cañería del baño en tiempo record! Ricardo fue muy amable, todo funcionó perfecto.",
    },
    {
      value: 6,
      name: "Julia",
      message:
        "Esta categoría no la entiendo muy bien todavía. Pero acá va un breve texto descriptivo.",
    },
    {
      value: 7,
      name: "Juan",
      message:
        "Esta categoría no la entiendo muy bien todavía. Pero acá va un breve texto descriptivo.",
    },
    {
      value: 8,
      name: "Macarena",
      message:
        "Esta categoría no la entiendo muy bien todavía. Pero acá va un breve texto descriptivo.",
    },
  ];

  const reformattedArray = kvArray.map(({key, value}) => ({[key]: value}));
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "80vw",
          // backgroundColor: "gray",
        }}
      >
        <div className="box">
          <img
            src={TecnoIcon}
            alt="prueb"
            width={80}
            style={{marginLeft: "8px"}}
          />
          <h2 style={{marginLeft: "20px"}}>Felipe</h2>
          <p
            style={{
              marginLeft: "20px",
              marginTop: "8px",
              marginRight: "20px",
            }}
          >
            Logré arreglar la cañería del baño en tiempo record! Ricardo fue muy
            amable, todo funcionó perfecto..
          </p>
        </div>
        <div className="box">
          <img
            src={TecnoIcon}
            alt="prueb"
            width={80}
            style={{marginLeft: "8px"}}
          />
          <h2 style={{marginLeft: "20px"}}>Martin</h2>
          <p
            style={{
              marginLeft: "20px",
              marginTop: "8px",
              marginRight: "20px",
            }}
          >
            Tenía la pantalla del celu rota hace años y Kevin me la arregló en
            15 minutos. Manno es un lujo!!.
          </p>
        </div>

        <div className="box">
          <img
            src={TecnoIcon}
            alt="prueb"
            width={80}
            style={{marginLeft: "8px"}}
          />
          <h2 style={{marginLeft: "20px"}}>Juana</h2>
          <p
            style={{
              marginLeft: "20px",
              marginTop: "8px",
              marginRight: "20px",
            }}
          >
            Tuve mi primera entrevista en inglés y conseguí el laburo gracias a
            Josephine que me dió una manno!.
          </p>
        </div>
        <div className="box">
          <img
            src={TecnoIcon}
            alt="prueb"
            width={80}
            style={{marginLeft: "8px"}}
          />
          <h2 style={{marginLeft: "20px"}}>Adriana</h2>
          <p
            style={{
              marginLeft: "20px",
              marginTop: "8px",
              marginRight: "20px",
            }}
          >
            Logré arreglar la cañería del baño en tiempo record! Ricardo fue muy
            amable, todo funcionó perfecto..
          </p>
        </div>
      </div>

      {/* <Carousel>
        <Carousel.Item>
          <div style={{display: "flex", justifyContent: "space-around"}}>
            <div className="box">
              <img
                src={TecnoIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px"}}
              />
              <h2 style={{marginLeft: "20px"}}>Felipe</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                }}
              >
                Logré arreglar la cañería del baño en tiempo record! Ricardo fue
                muy amable, todo funcionó perfecto..
              </p>
            </div>
            <div className="box">
              <img
                src={TecnoIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px"}}
              />
              <h2 style={{marginLeft: "20px"}}>Martin</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                }}
              >
                Tenía la pantalla del celu rota hace años y Kevin me la arregló
                en 15 minutos. Manno es un lujo!!.
              </p>
            </div>

            <div className="box">
              <img
                src={TecnoIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px"}}
              />
              <h2 style={{marginLeft: "20px"}}>Juana</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                }}
              >
                Tuve mi primera entrevista en inglés y conseguí el laburo
                gracias a Josephine que me dió una manno!.
              </p>
            </div>
            <div className="box">
              <img
                src={TecnoIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px"}}
              />
              <h2 style={{marginLeft: "20px"}}>Adriana</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                }}
              >
                Logré arreglar la cañería del baño en tiempo record! Ricardo fue
                muy amable, todo funcionó perfecto..
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{display: "flex", justifyContent: "space-around"}}>
            <div className="box">
              <img
                src={TecnoIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px"}}
              />
              <h2 style={{marginLeft: "20px"}}>Marcela</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                }}
              >
                Logré arreglar la cañería del baño en tiempo record! Ricardo fue
                muy amable, todo funcionó perfecto.
              </p>
            </div>
            <div className="box">
              <img
                src={TecnoIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px"}}
              />
              <h2 style={{marginLeft: "20px"}}>Julia</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                }}
              >
                Esta categoría no la entiendo muy bien todavía. Pero acá va un
                breve texto descriptivo..
              </p>
            </div>

            <div className="box">
              <img
                src={TecnoIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px"}}
              />
              <h2 style={{marginLeft: "20px"}}>Juan</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                }}
              >
                Esta categoría no la entiendo muy bien todavía. Pero acá va un
                breve texto descriptivo..
              </p>
            </div>
            <div className="box">
              <img
                src={TecnoIcon}
                alt="prueb"
                width={80}
                style={{marginLeft: "8px"}}
              />
              <h2 style={{marginLeft: "20px"}}>Macarena</h2>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "8px",
                  marginRight: "20px",
                }}
              >
                Esta categoría no la entiendo muy bien todavía. Pero acá va un
                breve texto descriptivo..
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel> */}
    </>
  );
};
export default Testimonios;
