import "./App.css";
import "./index.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import "./Fonts/AirbnbCerealBlack.ttf";
import "./Fonts/AirbnbCerealBold.ttf";

import "./Fonts/AirbnbCerealBook.ttf";
import "./Fonts/AirbnbCerealExtraBold.ttf";
import "./Fonts/AirbnbCerealLight.ttf";
import "./Fonts/AirbnbCerealMedium.ttf";

import "bootstrap/dist/css/bootstrap.min.css";

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
