import styled from "styled-components";
const light = require("../../img/light.png");
const ems = require("../../img/recsee-list.png");

export const Title = styled.h2`
  background: none;
  float: left;
  width: auto;
  line-height: 2.3;
  padding: 0 10px;
  color: #fff;
  height: 38px;
  font-size: 18px;
  &:before {
    content: "";
    background: url(${light}) no-repeat;
    display: inline-block;
    background-size: contain;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    float: left;
    margin-top: 10px;
  }
`;

export const Octagon = styled.li`
  line-height: 1.7;
  margin-bottom: 15px;
  &:before {
    content: "";
    background: url(${ems}) no-repeat;
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
