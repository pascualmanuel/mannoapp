import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Alianzas from "./Components/Alianzas.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/alianzas" element={<Alianzas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
