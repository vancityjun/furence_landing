import React, { useEffect } from "react";
import "./App.scss";
import Header from "./component/Header";
import ScrollNav from "./component/ScrollNav";
import Intro from "./component/Intro";
import Section from "./component/Section";
import $ from "jquery";
import useMedia from "use-media";
import { solutions } from "./solution.json";

const App = () => {
  const nMobile = useMedia({ minWidth: 600 });
  useEffect(() => {
    console.log(solutions);
    $(window).scroll(function() {
      // hideObjects();
      checkObjectsVisibility();
    });

    const hideObjects = () => {
      $(".fadeInUp-scroll").css({
        opacity: 0,
        transform: "translateY(100px)"
      });
    };

    const checkObjectsVisibility = () => {
      $(".fadeInUp-scroll").each(function(i) {
        const objectTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).outerHeight();

        if (windowBottom > objectTop - 100) {
          $(this).addClass("visible");
        } else {
          $(this).removeClass("visible");
        }
      });
    };

    // hideObjects();
    checkObjectsVisibility();
  });
  const Solutions = () => {
    return solutions.map((solution, i) => (
      <Section
        key={i}
        name={solution.name}
        desc={solution.desc}
        logo={solution.logo}
      />
    ));
  };
  return (
    <div className="App">
      {nMobile ? <ScrollNav solutions={solutions} /> : null}
      <Header />
      <Intro />
      {Solutions()}
    </div>
  );
};

export default App;
