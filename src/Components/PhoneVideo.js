import React from "react";
import {useEffect, useState, useCallback} from "react";
// import {Link} f rom "react-router-dom";
// import MannoLogo from "../Assets/Hero/logo-horizontal-sinfondo-azul.png";

import iPhoneApple from "../Assets/apple-iphone.png";
// import iPhoneVideo from "../Assets/manno-video.MP4";
// import PhoneSvg from "../Assets/Hero/phone-svg.svg";
import Gif from "../Assets/manno-gif.gif";
import ImgHome1 from "../Assets/Hero/img-home1.png";
import ImgHome2 from "../Assets/Hero/img-home2.png";

// import UsuariosTab from "./UsuariosTab";

function PhoneVideo() {
  const names = [ImgHome1, ImgHome2];

  const [newName, setnewName] = useState(ImgHome1);

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1800);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <>
      <div className="container2">
        {/* <video
          className="fullscreen"
          id="inlinevideo"
          muted
          autoPlay
          playsInline
          loop
          src={iPhoneVideo}
          type="video/mp4"
        /> */}

        {/* <img
          alt="gif-manno"
          className="fullscreen"
          id="inlinevideo"
          // muted
          // autoPlay
          // playsInline
          // loop
          src={newName}
          // type="video/mp4"
        /> */}
        <div id="fullscreen-cf2"></div>
        <div className="content">
          <img src={iPhoneApple} alt="prueb" width={250} />
        </div>
      </div>
      {/* <Phone /> */}
    </>
  );
}

export default PhoneVideo;
