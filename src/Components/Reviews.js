import React from "react";
import Mujer1 from "../Assets/Personitas/Mujer1.png";
import Mujer2 from "../Assets/Personitas/Mujer2.png";
import Mujer3 from "../Assets/Personitas/Mujer3.png";
import Mujer4 from "../Assets/Personitas/Mujer4.png";
import Mujer5 from "../Assets/Personitas/Mujer5.png";
import Mujer6 from "../Assets/Personitas/Mujer6.png";
import Mujer7 from "../Assets/Personitas/Mujer7.png";
import Hombre1 from "../Assets/Personitas/Hombre1.png";
import Hombre2 from "../Assets/Personitas/Hombre2.png";
import Hombre3 from "../Assets/Personitas/Hombre3.png";
import Hombre4 from "../Assets/Personitas/Hombre4.png";
import Hombre5 from "../Assets/Personitas/Hombre5.png";
import FiveStars from "../Assets/five-stars.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Reviews() {
  const responsive = {
    300: {items: 1},
    512: {items: 2},
    750: {items: 3},
    1024: {items: 4},
  };

  // const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div className="item" data-value="1">
      <div className="reviews-box">
        <img
          src={Hombre3}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Matías</h2>
        <p className="reviews-text">
          Super recomendable, explico el paso a paso de lo que hacia y me dio
          consejos a tener en cuenta para el mantenimiento de la cocina.
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="reviews-box">
        <img
          src={Mujer2}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Paula</h2>
        <p className="reviews-text">
          Impecable. Vino al toque. Instaló la hamaca. Quedó perfecto. gracias!
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="reviews-box">
        <img
          src={Mujer7}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Guadalupe</h2>
        <p className="reviews-text">
          Super puntual! Prolijo, profesional, süper recomendable. quedó todo
          perfecto. Muchas gracias
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="reviews-box">
        <img
          src={Hombre2}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Fernando</h2>
        <p className="reviews-text">
          Fue puntual, trabajo my bien, profesional.
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="reviews-box">
        <img
          src={Mujer1}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Monica</h2>
        <p className="reviews-text">
          Excelente todo , hasta me trajo una aspiradora para tener mientras
          arreglaba la mia. IMPECABLE!!!
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="6">
      <div className="reviews-box">
        <img
          src={Hombre3}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Martín</h2>
        <p className="reviews-text">Muy responsable. Lo recomiendo!</p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,

    <div className="item" data-value="7">
      <div className="reviews-box">
        <img
          src={Mujer6}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Antonella</h2>
        <p className="reviews-text">
          En un ratito me solucionó el problema de la persiana para que funcione
          correctamente. Süper amable y profesional.
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="8">
      <div className="reviews-box">
        <img
          src={Hombre1}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Adrián</h2>
        <p className="reviews-text">
          Fue muy amable y soluciono el inconveniente muy rápido. Recomendable
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,

    <div className="item" data-value="9">
      <div className="reviews-box">
        <img
          src={Mujer4}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Adela</h2>
        <p className="reviews-text">
          Impecable. Cometi un error con los materiales y Julián me ayudó a
          solucionarlo. El trabajo quedó impecable
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="10">
      <div className="reviews-box">
        <img
          src={Mujer5}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Roxana</h2>
        <p className="reviews-text">
          Solucionaron todo con eficiencia y precio justo. Recomiendo!
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,

    <div className="item" data-value="11">
      <div className="reviews-box">
        <img
          src={Hombre4}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Juan</h2>
        <p className="reviews-text">Muy profesional y atento</p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="12">
      <div className="reviews-box">
        <img
          src={Mujer3}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Carmen</h2>
        <p className="reviews-text">Buen trabajo, ordenado, recomendable</p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="13">
      <div className="reviews-box">
        <img
          src={Hombre5}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Manuel</h2>
        <p className="reviews-text">Totalmente recomendable.</p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="14">
      <div className="reviews-box">
        <img
          src={Mujer6}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Karina</h2>
        <p className="reviews-text">
          Excelente trabajo, atención y asesoramiento,
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="15">
      <div className="reviews-box">
        <img
          src={Mujer7}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">María Mercedes</h2>
        <p className="reviews-text">
          Desinstaló un aire acondicionado viejo e instalo uno nuevo. Todo
          perfecto
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
      </div>
    </div>,
    <div className="item" data-value="16">
      <div className="reviews-box">
        <img
          src={Mujer1}
          alt="Avatar"
          width={55}
          height={55}
          style={{marginLeft: "15px", marginTop: "15px"}}
        />
        <h2 className="reviews-title">Graciela</h2>
        <p className="reviews-text">
          Excelente profesional. <br></br>Puntual y prolijo
        </p>
        <img
          src={FiveStars}
          alt="FiveStars"
          height={20}
          style={{marginLeft: "20px"}}
        />
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
          <p>Lo que dicen los Usuarios</p>
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
