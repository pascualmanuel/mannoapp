import React from "react";

import PersonitaUno from "../Assets/Personitas/personita1.png";
import PersonitaDos from "../Assets/Personitas/personita2.png";
import PersonitaTres from "../Assets/Personitas/personita3.png";
import PersonitaCuatro from "../Assets/Personitas/personita4.png";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Reviews() {
  const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 4, itemsFit: "undefined"},
  };

  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div className="item" data-value="1">
      <div className="box">
        <img
          src={PersonitaUno}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Felipe
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Contactá al expert@ ideal para resolver cualquier imprevisto en tu
          hogar.
        </p>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="box">
        {" "}
        <img
          src={PersonitaDos}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Catalina
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Contactá al expert@ ideal para resolver cualquier imprevisto en tu
          hogar.
        </p>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Iñaki
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Contactá al expert@ ideal para resolver cualquier imprevisto en tu
          hogar.
        </p>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="box">
        {" "}
        <img
          src={PersonitaCuatro}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Sofía
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Contactá al expert@ ideal para resolver cualquier imprevisto en tu
          hogar.
        </p>
      </div>
    </div>,
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(247, 248, 248, 1)",
          paddingBottom: "100px",
        }}
      >
        <div className="reviews-container">
          <p
            style={{
              marginBottom: "15px",
            }}
          >
            Qué dicen sobre nosotros
          </p>
          <h2>
            Usuarios que recibieron <br></br>una
            <span style={{color: "#5d80ff"}}> manno. </span>
          </h2>
        </div>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite={true}
          autoPlay={true}
          autoPlayInterval={2000}
          disableButtonsControls={true}
          disableDotsControls={true}
        />
      </div>
    </>
  );
}

export default Reviews;
