import React, { useEffect, useState, useCallback } from "react";
import iPhoneApple from "../Assets/apple-iphone.png";
import ImgHome1 from "../Assets/Hero/img-home1.png";
import ImgHome2 from "../Assets/Hero/img-home2.png";

function PhoneVideo() {
  const names = [ImgHome1, ImgHome2];
  const [img, setImg] = useState(ImgHome1);

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setImg(names[index]);
  }, [names]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1900);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <>
      <div className="phone-hero-cont">
        <div id="fullscreen-cf2"></div>
        <div className="content">
          <img src={iPhoneApple} alt="Phone-mask" width={200} />
        </div>
      </div>
    </>
  );
}

export default PhoneVideo;
