import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title, Octagon } from "./style";
import "./style.scss";

const Box = ({ name, title, list, col }) => {
  useEffect(() => {
    // console.log(list);
  });
  const Background = name => {
    switch (name.toLowerCase()) {
      case "t-motion":
        return "#88b546";
      case "recsee":
        return "#3c9fe2";
      case "wallts":
        return "#156d95";
      case "irsee":
        return "#099081";
      case "irems":
        return "#e7503f";
      case "conple":
        return "#ec027d";
      default:
        return "#222";
    }
  };
  const ListStyle = require(`../../img/${name
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")}-list.png`);
  const Octagon = styled.li`
    line-height: 1.7;
    margin-bottom: 15px;
    &:before {
      content: "";
      background: url(${ListStyle}) no-repeat;
      display: inline-block;
      background-size: contain;
      width: 16px;
      height: 20px;
      transform: translate(0px, 5px);
      float: left;
    }
    p {
      margin-left: 26px;
    }
  `;

  const List = () => {
    return list.map((list, i) => (
      <Octagon>
        {list.title ? (
          <>
            <p>{list.title}</p>
            <p>{list.desc}</p>
          </>
        ) : (
          <p>{list}</p>
        )}
      </Octagon>
    ));
  };
  return (
    <div className={"col fadeInUp-scroll " + col}>
      <div className="title" style={{ background: Background(name) }}>
        <Title>{title}</Title>
      </div>
      <div className="desc">
        <ul>{List()}</ul>
      </div>
    </div>
  );
};

export default Box;
