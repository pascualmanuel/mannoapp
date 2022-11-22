import React, {useState} from "react";
import Step1 from "../Assets/Steps/step-1.png";
import Step2 from "../Assets/Steps/step-2.png";
import Step3 from "../Assets/Steps/step-3.png";
import Step4 from "../Assets/Steps/step-4.png";
// import Step5 from "../../Assets/Steps/step-5.png";

function Pruebas() {
  const [bgColour, setBgColour] = useState(Step1);

  const appStyles = {
    height: "500px",
    width: "300px",
    // backgroundImg: `${bgColour}`,
    backgroundImage: "url(" + bgColour + ")",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    cursor: "default",
  };

  const styles = {
    width: "100px",
    fontSize: "20px",
    // borderRadius: "40px",
    border: "1px solid black",
    color: "white",
    margin: "0.5em 1em",
    padding: "0.25em 1em",
    background: "#c83f49",
    cursor: "default",
  };

  return (
    <>
      <div className="App" style={appStyles}></div>
      <div
        style={styles}
        onMouseEnter={() => setBgColour(Step1)}
        onMouseLeave={() => setBgColour(Step1)}
      >
        Foto 1
      </div>

      <div
        style={styles}
        onMouseEnter={() => setBgColour(Step2)}
        onMouseLeave={() => setBgColour(Step2)}
      >
        Foto 2
      </div>
      <div
        style={styles}
        onMouseEnter={() => setBgColour(Step3)}
        onMouseLeave={() => setBgColour(Step3)}
      >
        Foto 3
      </div>
      <div
        style={styles}
        onMouseEnter={() => setBgColour(Step4)}
        onMouseLeave={() => setBgColour(Step4)}
      >
        Foto 4
      </div>
    </>
  );
}

export default Pruebas;
