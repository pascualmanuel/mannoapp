import React, {useState} from "react";
import ArreglatodoIcon from "../Assets/Hero/arreglatodo-icon.png";
import HogarIcon from "../Assets/Hero/hogar-icono.png";
import TecnoIcon from "../Assets/Hero/tecno-icon.png";
import ClasesIcon from "../Assets/Hero/clases-icon.png";

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
    // <div className="reviews-box"> Hola1 </div>,
    // <div className="reviews-box"> Hola1 </div>,
    // <div className="reviews-box"> Hola 2</div>,
    // <div className="reviews-box"> Hola 3</div>,
    <div className="item" data-value="1">
      <div className="box">1</div>
    </div>,
    <div className="item" data-value="2">
      <div className="box">2</div>
    </div>,
    <div className="item" data-value="3">
      <div className="box">3</div>
    </div>,
    <div className="item" data-value="4">
      <div className="box">4</div>
    </div>,
    <div className="item" data-value="5">
      <div className="box">5</div>
    </div>,
    <div className="item" data-value="5">
      <div className="box">6</div>
    </div>,
    <div className="item" data-value="5">
      <div className="box">7</div>
    </div>,
  ];

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite={true}
        autoPlay={true}
        autoPlayInterval={2000}
      />
    </>
  );
}

export default Reviews;
