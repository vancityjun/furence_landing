import React, { useEffect } from "react";
import "./style.scss";
import $ from "jquery";
const ScrollNav = ({ solutions }) => {
  useEffect(() => {
    $(window).bind("mousewheel", event => {
      const delta = Math.abs(event.originalEvent.wheelDelta);
      // console.log($(".scroll_nav").is(":hover"));
      if (delta > 1) {
        $(".scroll_nav").css("left", 10);
      } else {
        setTimeout(() => $(".scroll_nav").css("left", -100), 2000);
      }
    });
  });
  const Lists = () => {
    return solutions.map((solution, i) => (
      <li key={i}>
        <a href="# ">{solution.name}</a>
      </li>
    ));
  };
  return (
    <ul className="scroll_nav">
      <li>
        <a href="# ">Intro</a>
      </li>
      <Lists />
    </ul>
  );
};

export default ScrollNav;
