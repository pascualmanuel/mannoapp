import { ReactSVG } from "react-svg";
import Logo from "../Assets/Isologo-sinfondo blanco.svg";
import { useState, useEffect } from "react";

function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const isMobile = window.innerWidth <= 770;
  let auto = "auto";
  let MTop = "0px";

  if (isMobile) {
    auto = "70px";
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const transitionTimer = setTimeout(() => {
        setIsLoading(false);
      }, 800);

      return () => clearTimeout(transitionTimer);
    }
  }, [fadeOut]);

  if (!isLoading) return null;

  return (
    <div className={`loader ${fadeOut ? "fade-out" : ""} none-cursor`}>
      <ReactSVG
        src={Logo}
        style={{ marginTop: MTop }}
        className="logo"
        beforeInjection={(svg) => {
          svg.setAttribute("style", `width: ${auto}`);
          svg.classList.add("svg-class-name");
        }}
      />
    </div>
  );
}

export default Loader;
