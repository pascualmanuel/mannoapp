import React from "react";

import PersonitaUno from "../Assets/Personitas/personita1.png";
import PersonitaDos from "../Assets/Personitas/personita2.png";
import PersonitaTres from "../Assets/Personitas/personita3.png";
import PersonitaCuatro from "../Assets/Personitas/personita4.png";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Reviews() {
  const responsive = {
    300: {items: 1},
    512: {items: 2},
    750: {items: 3},
    1024: {items: 4},
  };

  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div className="item" data-value="1">
      <div className="reviews-box">
        <img
          src={PersonitaUno}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Matías
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Super recomendable, explico el paso a paso de lo que hacia y me dio
          consejos a tener en cuenta para el mantenimiento de la cocina.
        </p>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaDos}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Paula
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Impecable. Vino al toque. Instaló la hamaca. Quedó perfecto. gracias!
        </p>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Guadalupe
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Super puntual! Prolijo, profesional, süper recomendable. quedó todo
          perfecto. Muchas gracias Juan
        </p>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaUno}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Fernando
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Fue puntual, trabajo my bien, profesional.
        </p>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Monica
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Excelente todo , hasta me trajo una aspiradora para tener mientras
          arreglaba la mia. IMPECABLE!!!
        </p>
      </div>
    </div>,
    <div className="item" data-value="6">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Martín
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          My responsable. Lo recomiendo!
        </p>
      </div>
    </div>,

    <div className="item" data-value="7">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Antonella
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          En un ratito me solucionó el problema de la persiana para que funcione
          correctamente. Süper amable y profesional.
        </p>
      </div>
    </div>,
    <div className="item" data-value="8">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Carmen
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Buen trabajo, ordenado, recomendable
        </p>
      </div>
    </div>,

    <div className="item" data-value="9">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Adela
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Impecable. Cometi un error con los materiales y Julián me ayudó a
          solucionarlo. El trabajo quedó impecable
        </p>
      </div>
    </div>,
    <div className="item" data-value="10">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Roxana
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Solucionaron todo con eficiencia y precio justo. Recomiendo!
        </p>
      </div>
    </div>,

    <div className="item" data-value="11">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Juan
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Muy profesional y atento
        </p>
      </div>
    </div>,
    <div className="item" data-value="12">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Adri
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Fue muy amable y soluciono el inconveniente muy rápido. Recomendable
        </p>
      </div>
    </div>,
    <div className="item" data-value="13">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Manuel
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Totalmente recomendable.
        </p>
      </div>
    </div>,
    <div className="item" data-value="14">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Karina
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Excelente trabajo, atención y asesoramiento,
        </p>
      </div>
    </div>,
    <div className="item" data-value="15">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          María Mercedes
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Desinstaló un aire acondicionado viejo e instalo uno nuevo. Todo
          perfecto
        </p>
      </div>
    </div>,
    <div className="item" data-value="16">
      <div className="reviews-box">
        {" "}
        <img
          src={PersonitaTres}
          alt="prueb"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 style={{marginLeft: "20px", fontSize: "20px", marginTop: "8px"}}>
          Graciela
        </h2>
        <p
          style={{
            marginLeft: "20px",
            marginTop: "8px",
            marginRight: "20px",
            fontSize: "15px",
          }}
        >
          Excelente profesional. <br></br>Puntual y prolijo
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
            Lo que dicen los Usuarios
          </p>
          <h2>
            Comunidad
            <span style={{color: "#5d80ff"}}> Manno. </span>
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
          autoPlayStrategy={"none"}
          paddingLeft={20}
        />
      </div>
    </>
  );
}

export default Reviews;
