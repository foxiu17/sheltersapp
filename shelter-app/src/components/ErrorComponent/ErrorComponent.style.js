import styled from "styled-components";

import { Max } from "../../assets/mixins.style";

import UI_TYPOGRAPHY from "@material-ui/core/Typography/Typography";

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 20px;
`;

export const ErrorItem = styled.div`
  flex: 0 1 auto;
  padding: 15px 30px;

  &:first-of-type {
    flex: 0 1 30%;
    text-align: center;

    ${Max.xs`
      flex: 0 1 100%;
    `}
  }

  ${Max.xs`
    flex: 0 1 100%;
  `}
`;

export const Typography = styled(UI_TYPOGRAPHY)``;

export const Image = styled.img`
  max-width: 150px;
  width: auto;
  height: auto;
`;
