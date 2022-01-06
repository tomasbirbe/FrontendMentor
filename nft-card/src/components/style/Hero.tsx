import styled from 'styled-components';
import { Stack } from './base';

const Overlay = styled(Stack)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  border-radius: 15px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;

export default Overlay;
