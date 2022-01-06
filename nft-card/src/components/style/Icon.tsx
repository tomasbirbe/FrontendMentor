import React from 'react';
import styled from 'styled-components';
import { Img } from '.';

const Icon = styled(Img)`
  width: ${({ boxSize }) => boxSize || '30px'};
  height: ${({ boxSize }) => boxSize || '30px'};
  color: ${({ color }) => color || 'black'};
  object-fit: ${({ objectFit }) => objectFit || 'contain'};
`;

export default Icon;
