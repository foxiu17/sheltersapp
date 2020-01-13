import styled from 'styled-components';

import UI_CARD from '@material-ui/core/Card';
import UI_CARD_ACTIONS from '@material-ui/core/CardActions';
import UI_CARD_CONTENT from '@material-ui/core/CardContent';

import { Typography as commonTypography } from "../../assets/common/Layout.style";

import { ButtonBox as commonButtonBox } from '../../assets/common/Button.style';

export const ButtonBox = styled.div`
  ${commonButtonBox}
`;

export const CardBox = styled(UI_CARD)``;

export const CardActions = styled(UI_CARD_ACTIONS)``;

export const CardContent = styled(UI_CARD_CONTENT)`
  text-align: center;
`;

export const Typography = styled(commonTypography)`
  text-align: center;
`;
