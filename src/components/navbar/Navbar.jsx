import React, { useContext } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.svg";
import language from "../../assets/language.svg";
import { LanguageContext } from "../../context/LanguageContext";


function Navbar() {
  const {direction, toggleDirection } = useContext(LanguageContext);
  
  return (
    <header>
      <div className="container">
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <div className="language" onClick={toggleDirection}>
          <img src={language} alt="language" />
          {direction === "ltr" ? "Ar" : "En"}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
