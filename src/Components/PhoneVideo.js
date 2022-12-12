import React from "react";
// import {Link} from "react-router-dom";
// import MannoLogo from "../Assets/Hero/logo-horizontal-sinfondo-azul.png";

import iPhoneApple from "../Assets/apple-iphone.png";
// import iPhoneVideo from "../Assets/manno-video.MP4";
// import PhoneSvg from "../Assets/Hero/phone-svg.svg";
import Gif from "../Assets/manno-gif.gif";
import Video from "../Assets/manno-gif-splash.GIF";
// import UsuariosTab from "./UsuariosTab";

function PhoneVideo() {
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

        <img
          alt="gif-manno"
          className="fullscreen"
          id="inlinevideo"
          // muted
          // autoPlay
          // playsInline
          // loop
          src={Gif}
          // type="video/mp4"
        />
        <div className="content">
          <img src={iPhoneApple} alt="prueb" width={250} />
        </div>
      </div>
      {/* <Phone /> */}
    </>
  );
}

export default PhoneVideo;
