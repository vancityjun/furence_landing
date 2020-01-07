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

// const StyledComponents = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default StyledComponents;
