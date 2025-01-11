import styled from "styled-components";

export const ClickableBackground = styled.div`
  z-index: 1;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(10px);
  position: absolute;
  top: 0;
  left: 0;
`;
