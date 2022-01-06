import styled from 'styled-components';
import { Stack } from './base';

const Overlay = styled(Stack)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => 'hsl(178, 100%, 50%, 0.4)'};
  opacity: 0;
  border-radius: 15px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export default Overlay;
