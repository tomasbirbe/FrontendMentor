import styled from 'styled-components';
import Box from './Box';
import { calculateWidth } from '../utils/utils';

const Container = styled(Box)<any>`
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    width: ${({ width }) => calculateWidth(width, 'sm') || '100%'};
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    width: ${({ width }) => calculateWidth(width, 'md') || '100%'};
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    width: ${({ width }) => calculateWidth(width, 'lg') || '100%'};
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    width: ${({ width }) => calculateWidth(width, 'xl') || '100%'};
  } ;
`;

export default Container;
