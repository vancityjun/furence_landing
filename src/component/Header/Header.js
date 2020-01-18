import React, { useEffect } from "react";
import "./style.scss";
import styled from "styled-components";
import Particles from "react-particles-js";
import Config from "./particlesjs-config.json";
import $ from "jquery";
import TextScramble from "./TextScramble";

const Header = () => {
  useEffect(() => {
    const phrases = ["integration", "brilliant", "innovative"];

    const el = document.querySelector(".rotation-wrapper");
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  });
  return (
    <section className="header" data-midnight="white">
      <Particles params={Config} />
      <div>
        <div className="static">
          <div className="vigne" />
        </div>
        <div className="text">
          <span className="small cap">Conference for future</span>
          <h1 className="cap">
            Furence&nbsp;
            <span className="light">
              is&nbsp;
              <span className="rotation-wrapper"></span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
