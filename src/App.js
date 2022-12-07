// import ReactDOM from "react-dom";
// import {BrowserRouter} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
// import "./Components/Tabs/Tabs.css";
// import {BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

// import {Routes, Route} from "react-router-dom";
import Hero from "./Components/Hero";
import "./Fonts/AirbnbCerealBlack.ttf";
import "./Fonts/AirbnbCerealBold.ttf";

import "./Fonts/AirbnbCerealBook.ttf";
import "./Fonts/AirbnbCerealExtraBold.ttf";
import "./Fonts/AirbnbCerealLight.ttf";
import "./Fonts/AirbnbCerealMedium.ttf";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import ParallaxPrueba from "./Components/ParallaxPrueba";
import {useParallax} from "react-scroll-parallax";
import {Parallax} from "react-scroll-parallax";
import TabsComp from "./Components/Tabs/TabsComp";
import Expertos from "./Components/Expertos";
import Reviews from "./Components/Reviews";

import Faqs from "./Components/Faqs";
import "bootstrap/dist/css/bootstrap.min.css";
import Usuario from "./Components/UsuariosTab";
import Pruebas from "./Components/ComoFuncionaUsuario";
import Terms from "./Components/Terms";
import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <>
      {/* <Hero />
        <TabsComp />
        <Categories />
        <Expertos />
        <Faqs />
        <Pruebas />
        <Footer /> */}
      {/* <Routes>
        <Router>

          <Route path="/" render={() => <Home />} />
          <Route path="/terms" component={Terms} />
        </Router>
      </Routes> */}

      {/* <Router>
        <Home />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/terms" component={Terms} />
        </Switch>
      </Router> */}

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          {/* <Route index element={<Terms />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
