import React from 'react';
import styled from 'styled-components';

const Text = styled.span<any>`
  color: ${(props) =>
    props.theme.colors[props.color] || props.color || 'inherit'};
  opacity: ${({ opacity }) => opacity};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  width: ${({ width }) => width};
`;

export default Text;
