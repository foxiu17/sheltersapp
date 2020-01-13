import { Breakpoints } from './variables.style';
import { css } from 'styled-components';

export const Max = Object.keys(Breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${Breakpoints[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const Min = Object.keys(Breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${Breakpoints[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});