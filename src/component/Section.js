import React, { useEffect } from "react";
import Box from "./Box";
import { Container } from "./StyledComponents";

const Section = ({ name, logo, desc }) => {
  useEffect(() => {});
  const Boxes = () => {
    return desc.map((desc, i) => (
      <Box key={i} title={desc.title} list={desc.list} />
    ));
  };
  const logoUrl = require(`../img/${logo}.png`);

  const alert =
    "콜센터 시스템, CTI 시스템, IVR, 녹취시스템, 전광판, iot, 관제, ems, ems 상세조회, CRM, SI";
  return (
    <section id={name} className="se cf solution" data-midnight={null}>
      <Container>
        <div className="feature">
          <img src={logoUrl} alt={alert} className="logo" />
        </div>
        <div className="row">{Boxes()}</div>
      </Container>
    </section>
  );
};

export default Section;
