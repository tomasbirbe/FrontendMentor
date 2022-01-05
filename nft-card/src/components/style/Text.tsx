import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  color: red;
  background: var('--soft-blue');
`;

const Text = ({ children }: any): JSX.Element => {
  return <P>{children}</P>;
};

export { Text };
