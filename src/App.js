import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import "./Components/Tabs/Tabs.css";

import {Routes, Route} from "react-router-dom";
import Hero from "./Components/Hero";
import "./Fonts/AirbnbCerealBlack.ttf";
import "./Fonts/AirbnbCerealBold.ttf";

import "./Fonts/AirbnbCerealBook.ttf";
import "./Fonts/AirbnbCerealExtraBold.ttf";
import "./Fonts/AirbnbCerealLight.ttf";
import "./Fonts/AirbnbCerealMedium.ttf";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Pruebas from "./Components/Pruebas";
import Footer from "./Components/Footer";
import ParallaxPrueba from "./Components/ParallaxPrueba";
// import ReactDOM from "react-dom";
// import {BrowserRouter} from "react-router-dom";
import {useParallax} from "react-scroll-parallax";
import {Parallax} from "react-scroll-parallax";
import TabsComp from "./Components/Tabs/TabsComp";
import Expertos from "./Components/Expertos";
import Testimonios from "./Components/Testimonios";

import Faqs from "./Components/Faqs";
import "bootstrap/dist/css/bootstrap.min.css";
import Usuario from "./Components/UsuariosTab";

function App() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <TabsComp />
      </div>
      <Categories />
      <Expertos />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
