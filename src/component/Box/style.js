import styled from "styled-components";
import { solutions } from "../../solution.json";
const light = require("../../img/light-bulb.png");

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
