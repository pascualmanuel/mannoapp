// import ReactDOM from "react-dom";
// import {BrowserRouter} from "react-router-dom";

// import "./App.css";
// import "./index.css";
// import "/Tabs/Tabs.css";

// import {Routes, Route} from "react-router-dom";
// import "./Fonts/AirbnbCerealBlack.ttf";
// import "./Fonts/AirbnbCerealBold.ttf";

// import "./Fonts/AirbnbCerealBook.ttf";
// import "./Fonts/AirbnbCerealExtraBold.ttf";
// import "./Fonts/AirbnbCerealLight.ttf";
// import "./Fonts/AirbnbCerealMedium.ttf";
// import Header from "/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Hero from "./Hero";
import Categories from "./Categories";
import Footer from "./Footer";

import TabsComp from "./Tabs/TabsComp";
import Expertos from "./Expertos";
import Testimonios from "./Testimonios";

import Faqs from "./Faqs";

import Usuario from "./UsuariosTab";
import Pruebas from "./ComoFuncionaUsuario";
import Terms from "./Terms";

function Home() {
  return (
    <>
      <Hero />
      <TabsComp />
      <Categories />
      <Expertos />
      <Faqs />
      {/* <Pruebas /> */}
      <Footer />
    </>
  );
}

export default Home;



