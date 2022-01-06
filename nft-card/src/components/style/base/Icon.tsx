import React from 'react';
import styled from 'styled-components';
import { Img } from '.';

const Icon = styled.span<any>`
  width: ${({ boxSize }) => boxSize || '30px'};
  height: ${({ boxSize }) => boxSize || '30px'};
  mask-image: ${({ src }) => `url(${src})`};
  mask-position: center;
  mask-size: contain;
  mask-repeat: no-repeat;
  object-fit: ${({ objectFit }) => objectFit || 'contain'};
  background-color: ${({ color, theme }) =>
    theme.colors?.[color] || color || 'black'};
  opacity: ${({ opacity }) => opacity || 1};
`;

export default Icon;
