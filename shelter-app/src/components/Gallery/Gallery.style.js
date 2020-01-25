import styled from "styled-components";

import {
  ImageBox as commonImageBox,
  Image as commonImage
} from "../../assets/common/Image.style";

export const ImageBox = styled.div`
  ${commonImageBox};

  img {
    width: 100%;
    max-width: 100%;
    max-height: calc(100vh - 220px);
  }
`;

export const CustomImage = styled.img`
  ${commonImage}
`;
