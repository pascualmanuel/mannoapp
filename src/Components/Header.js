import React from "react";
import {Link} from "react-router-dom";
import MannoLogo from "../Assets/Hero/logo-horizontal-sinfondo-azul.png";
import {useEffect, useState, useCallback} from "react";

const names = ["Manuel", "Elias", "Sebas"];

function Header() {
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return <h2>name:{newName}</h2>;
}

export default Header;
