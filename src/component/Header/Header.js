import React from "react";
import "./style.scss";
import styled from "styled-components";
import Particles from "react-particles-js";
import Config from "./particlesjs-config.json";

const Header = () => {
  const Section = styled.section`
    background: url(${require("../../img/ad-header.png")}) no-repeat center;
    background-size: cover;
    height: 100vh;
    overflow: hidden;
  `;

  return (
    <Section className="header" data-midnight="white">
      <Particles params={Config} />
      <div className="headerc" style={{ textAlign: "center" }}></div>
      <div className="col header-button">
        <a href="/" className="btn btn-5 btn--cw-tlbr" target="_blank">
          <span className="btn--inner">furence.com</span>
        </a>
      </div>
    </Section>
  );
};

export default Header;
