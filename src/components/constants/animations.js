import { keyframes } from 'styled-components';

export const crescendo = keyframes`
  0%   {transform: scale(1);}
  100% {transform: scale(1.2);}
`;

export const decrescendo = keyframes`
  0%   {transform: scale(1.2);}
  100% {transform: scale(1);}
`;

export const pulseIn = keyframes`
  0%   {transform: scale(1);}
  50% {transform: scale(1.1);}
  100% {transform: scale(1);}
`;

export const pulseOut = keyframes`
  0%   {transform: scale(1.1);}
  100% {transform: scale(1);}
`;

export const brigthIn = keyframes`
  0%   {filter: brightness(1);}
  50% {filter: brightness(1.3);}
  100% {filter: brightness(1);}
`;

export const brigthOut = keyframes`
  0%   {    filter: brightness(1.1);}
  100% {    filter: brightness(1);}
`;
