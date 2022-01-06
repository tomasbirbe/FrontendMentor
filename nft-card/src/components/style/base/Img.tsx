import styled from 'styled-components';

const Img = styled.img<any>`
  width: ${({ width }) => width || '100%'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  backgroun-size: ${({ bgSize }) => bgSize || 'cover'};
  backgroun-repeat: ${({ bgRepeat }) => bgRepeat || 'cover'};
`;

export default Img;
