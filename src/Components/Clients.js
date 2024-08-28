import React, { useState, useEffect } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Cliente1 from "../Assets/clientes/client-1.svg";
import Cliente2 from "../Assets/clientes/client-2.svg";
import Cliente3 from "../Assets/clientes/client-3.svg";
import Cliente4 from "../Assets/clientes/client-4.svg";
import Cliente5 from "../Assets/clientes/client-5.svg";
import Cliente6 from "../Assets/clientes/client-6.svg";
import Cliente7 from "../Assets/clientes/client-7.svg";
import Cliente8 from "../Assets/clientes/client-8.svg";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { ReactSVG } from "react-svg";

function Clients() {
  const [isMobile, setIsMobile] = useState(false);
  const [slides, setSlides] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Update isMobile state
      setIsMobile(width <= 895);

      // Update slides based on width
      if (width < 600) {
        setSlides(3);
      } else if (width < 800) {
        setSlides(4);
      } else {
        setSlides(5);
      }

      console.log(width);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    Cliente1,
    Cliente2,
    Cliente3,
    Cliente4,
    Cliente5,
    Cliente6,
    Cliente7,
    Cliente8,
  ];

  let auto = "auto";
  let autoNew = "auto";
  let autoLg = "auto";

  if (isMobile) {
    auto = "95px";
    autoNew = "110px";
    autoLg = "70px";
  }

  // let slides = 5;

  // if (window.innerWidth < 800 && window.innerWidth > 600) {
  //   slides = 4;
  // } else if (window.innerWidth < 600 && window.innerWidth < 800) {
  //   slides = 3;
  // }

  console.log(slides);
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

        {isMobile && (
          <>
            <Swiper
              slidesPerView={slides}
              spaceBetween={0}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper mt-24"
            >
              {images.map((image, index) => {
                let width;

                if (index === 2) {
                  width = "75"; // Set width for Cliente8
                } else if (index === 7 || index === 3) {
                  width = "115px"; // Set width for Cliente5
                } else if (index === 5) {
                  width = "105px"; // Set width for Cliente5
                } else {
                  width = auto; // Default width for other clients
                }

                return (
                  <SwiperSlide key={index}>
                    <div className="caro-inside">
                      <img
                        width={width} // Use the calculated width
                        src={image}
                        alt={`Slide ${index}`}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* <div className="left-blur"></div>

            <div className="right-blur"></div> */}
          </>
        )}
        {!isMobile && (
          <div className="clients-cont">
            <div className="first-row-clients">
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
              <ReactSVG
                src={Cliente8}
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `width: ${autoLg}`);
                  svg.classList.add("svg-class-name");
                }}
              />
            </div>
            <div className="second-row-clients">
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
          </div>
        )}
      </div>
    </>
  );
}

export default Clients;
