import React, {useState} from "react";
import ArreglatodoIcon from "../Assets/Hero/arreglatodo-icon.png";
import HogarIcon from "../Assets/Hero/hogar-icono.png";
import TecnoIcon from "../Assets/Hero/tecno-icon.png";
import ClasesIcon from "../Assets/Hero/clases-icon.png";
import {Tabs, Tab, Carousel, Card, Stack} from "react-bootstrap";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return <AliceCarousel mouseTracking items={items} />;
};
