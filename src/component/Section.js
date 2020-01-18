import React, { useEffect } from "react";
import Box from "./Box";
import { Container, Flexbox } from "./StyledComponents";

const Section = ({ name, logo, desc }) => {
  useEffect(() => {});
  const Background = name => {
    switch (name.toLowerCase()) {
      case "t-motion":
        return "#183a14";
      case "recsee":
        return "#0e2a3e";
      case "wallts":
        return "#E9F2F9";
      case "irsee":
        return "#f1eaea";
      case "irems":
        return "#e7503f";
      case "conple":
        return "#250717";
      default:
        return "#222";
    }
  };
  const col = desc.length % 2 === 0 ? "col2" : "col3";
  const Boxes = () => {
    return desc.map((desc, i) => (
      <Box key={i} name={name} title={desc.title} list={desc.list} col={col} />
    ));
  };
  const logoUrl = require(`../img/${logo}.png`);

  const alert =
    "콜센터 시스템, CTI 시스템, IVR, 녹취시스템, 전광판, iot, 관제, ems, ems 상세조회, CRM, SI";
  return (
    <section
      id={name}
      className="se cf solution"
      style={{ background: Background(name) }}
    >
      <Container>
        <div className="feature">
          <img src={logoUrl} alt={alert} className="logo" />
        </div>
        <Flexbox>{Boxes()}</Flexbox>
      </Container>
    </section>
  );
};

export default Section;
