import React, { useEffect } from "react";
import "./style.scss";
import $ from "jquery";
const ScrollNav = ({ solutions }) => {
  const Lists = () => {
    return solutions.map((solution, i) => (
      <li key={i}>
        <a href="# ">{solution.name}</a>
      </li>
    ));
  };
  const scrollNavHeight = $(".scroll_nav").height();
  const MarginTop = parseInt(scrollNavHeight / 2);
  return (
    <ul className="scroll_nav" style={{ marginTop: MarginTop }}>
      <li>
        <a href="# ">Intro</a>
      </li>
      <Lists />
    </ul>
  );
};

export default ScrollNav;
