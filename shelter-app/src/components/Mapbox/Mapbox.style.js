import styled from "styled-components";

import {
  ImageBox as commonImageBox,
  Image as commonImage
} from "../../assets/common/Image.style";

import { IconButton as commonIconButton } from "../../assets/common/Button.style";

export const MapContainer = styled.div`
  width: 100%;
`;

export const InfoboxContainer = styled.div`
  min-width: 200px;
  max-width: 250px;
  padding: 12px;
  background-color: ${props => props.theme.palette.common.white};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.palette.common.alto};
  opacity: 0.85;
`;

export const InfoboxGrid = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

export const InfoboxInnerGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoboxItem = styled.div`
  width: 100%;
`;

export const ImageBox = styled.div`
  ${commonImageBox}
  padding: 10px 0 0;
  text-align: center;
`;

export const CustomImage = styled.img`
  ${commonImage}
  max-width: 100% !important;
`;

export const ButtonBox = styled.div`
  display: block;
`;

export const IconButton = styled(commonIconButton)`
  ${commonIconButton}
  font-size: 10px !important;
`;

export const InfoText = styled.p`
  padding: 0 0 5px;
  color: ${props => props.theme.palette.common.black};
  font-size: ${props => (props.title === "true" ? "14px" : "12px")};
  font-weight: ${props => (props.title === "true" ? "600" : "400")};
`;

export const Link = styled.a`
  padding: 5px;
  transition: 0.2s;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.common.robins_egg_blue};
  background-color: ${props => props.theme.common.white};
  color: ${props => props.theme.common.robins_egg_blue};
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.common.robins_egg_blue};
    color: ${props => props.theme.common.white};
  }
`;

export const Strong = styled.strong`
  font-weight: 600;
`;
