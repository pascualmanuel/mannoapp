import "swiper/swiper-bundle.css"; // Import the Swiper CSS
import { Swiper, SwiperSlide } from "swiper/react";
// import "../Styles/Prueba.css"; // Importa tu archivo CSS personalizado
import Cliente1 from "../Assets/clientes/client-1.svg";
import Cliente2 from "../Assets/clientes/client-2.svg";
import Cliente3 from "../Assets/clientes/client-3.svg";
import Cliente4 from "../Assets/clientes/client-4.svg";
import Cliente5 from "../Assets/clientes/client-5.svg";
import Cliente6 from "../Assets/clientes/client-6.svg";
import Cliente7 from "../Assets/clientes/client-7.svg";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { ReactSVG } from "react-svg";

function Clients() {
  const images = [
    Cliente1,
    Cliente2,
    Cliente3,
    Cliente4,
    Cliente5,
    Cliente6,
    Cliente7,
  ];
  const isMobile = window.innerWidth <= 770; // Adjust the width as needed

  let auto = "auto";
  let autoNew = "auto";
  let autoLg = "auto";

  if (isMobile) {
    auto = "80px";
    autoNew = "110px";
    autoLg = "70px";
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(247, 248, 248, 1)",
          paddingBottom: "100px",
        }}
      >
        <div className="reviews-container max-2000">
          <p>Alianzas</p>
          <h2>
            Nos confían sus <br />
            <span style={{ color: "#5d80ff" }}> instalaciones. </span>
          </h2>
        </div>
        <>
          <div style={{ position: "relative" }} className="relative">
            {/* <Swiper
              slidesPerView={slides}
              spaceBetween={20}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper mt-24"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="caro-inside">
                    <img
                      key={index}
                      width={200}
                      src={image}
                      alt={`Slide ${index}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
            {/* <div className="left-blur"></div> */}

            {/* <div className="right-blur"></div> */}
            <div className="clients-cont">
              <div className="first-row-clients">
                <ReactSVG
                  src={Cliente1}
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `width: ${auto}`);
                    svg.classList.add("svg-class-name");
                  }}
                />
                <ReactSVG
                  src={Cliente2}
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `width: ${auto}`);
                    svg.classList.add("svg-class-name");
                  }}
                />
                <ReactSVG
                  src={Cliente7}
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `width: ${auto}`);
                    svg.classList.add("svg-class-name");
                  }}
                />
                <ReactSVG
                  src={Cliente6}
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `width: ${auto}`);
                    svg.classList.add("svg-class-name");
                  }}
                />
              </div>
              <div className="second-row-clients">
                <ReactSVG
                  src={Cliente5}
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `width: ${auto}`);
                    svg.classList.add("svg-class-name");
                  }}
                />
                <ReactSVG
                  src={Cliente4}
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `width: ${autoNew}; `);
                    svg.classList.add("svg-class-name");
                  }}
                />
                <ReactSVG
                  src={Cliente3}
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `width: ${autoLg}`);
                    svg.classList.add("svg-class-name");
                  }}
                />
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Clients;
