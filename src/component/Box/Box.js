import React, { useEffect } from "react";
import styled from "styled-components";
import { Title } from "./style";
import "./style.scss";

const Box = ({ title, list }) => {
  useEffect(() => {
    console.log(list);
  });
  const List = () => {
    return list.map((list, i) => (
      <li>
        {list.title ? (
          <>
            <span className="list">{list.title}</span>
            <span className="octagon">{list.desc}</span>
          </>
        ) : (
          <span className="octagon">{list}</span>
        )}
      </li>
    ));
  };
  return (
    <div className="folder col3 fadeInUp-scroll">
      <div className="title">
        <Title>{title}</Title>
      </div>
      <div className="desc">
        <ul>{List()}</ul>
      </div>
    </div>
  );
};

export default Box;
