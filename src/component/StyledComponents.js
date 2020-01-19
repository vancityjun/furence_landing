import React from "react";
import styled from "styled-components";

export const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Container = styled.div`
  text-align: ${props => props.align || "left"};
  max-width: 1350px;
  margin: 0 auto;
`;

export const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: 4px solid #437ea0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
// const StyledComponents = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default StyledComponents;
