import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import UI_COPYRIGHT_ICON from "@material-ui/icons/Copyright";
import UI_CHEVRON_LEFT_ICON from "@material-ui/icons/ChevronLeft";
import UI_CHEVRON_RIGHT_ICON from "@material-ui/icons/ChevronRight";

import { Span as commonSpan } from "../../assets/common/Layout.style";

export const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  max-width: 100%;
  transform: translateX(-50%);
`;

export const Span = styled.span`
  ${commonSpan};
  color: #fff;
  font-size: ${props => (props.bigger === "true" ? "24px" : "12px")};
`;

export const LogoBox = styled.div`
  max-width: 100%;
  max-height: 150px;
  padding: 0 0 15px;
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 100%;
  max-height: 150px;
`;

export const Copyright = styled(UI_COPYRIGHT_ICON)`
  color: ${props => props.theme.palette.common.white};
`;

export const ChevronLeftIcon = styled(UI_CHEVRON_LEFT_ICON)`
  color: ${props => props.theme.palette.common.blaze_orange};
`;

export const ChevronRightIcon = styled(UI_CHEVRON_RIGHT_ICON)`
  color: ${props => props.theme.palette.common.blaze_orange};
`;
