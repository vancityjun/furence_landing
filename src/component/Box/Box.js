import React, { useEffect } from "react";
import styled from "styled-components";
import { Title, Octagon } from "./style";
import "./style.scss";

const Box = ({ title, list, col }) => {
  useEffect(() => {
    console.log(list);
  });
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
