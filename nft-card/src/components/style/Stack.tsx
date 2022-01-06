import React from 'react';
import styled from 'styled-components';
import Box from './Box';

const Stack = styled(Box)<any>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

export default Stack;
