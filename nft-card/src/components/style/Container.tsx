import styled from 'styled-components';
import Box from './Box';

const calculateWidth = (width: any, media: any) => {
  if (width[media]) {
    return width[media];
  } else if (typeof width === 'string') {
    return width;
  }
  return '100%';
};

const Container = styled(Box)<any>`
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    width: ${({ width }) => calculateWidth(width, 'sm')};
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    background: pink;
    width: ${({ width }) => calculateWidth(width, 'md')};
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    background: green;
    width: ${({ width }) => calculateWidth(width, 'lg')};
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    background: yellow;
    width: ${({ width }) => calculateWidth(width, 'xl')};
  } ;
`;

export default Container;
