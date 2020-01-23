import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${props => (props.background ? props.background : "")});
  background-size: cover;
  background-color: #C3FEFC;
  background-position: center center;
  width: 100%;
  min-height: calc(100vh - 70px);
`;

export const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 70px);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;
