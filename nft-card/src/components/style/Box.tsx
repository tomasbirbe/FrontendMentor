import styled from 'styled-components';

const Box = styled.div<any>`
  height: ${({ height }) => height || 'auto'};
  /* width: ${({ width }) => width || '100%'}; */
  background-color: ${({ bg, theme }) => theme.colors[bg] || bg};
  border: ${({ border }) => border || 'none'};
  border-inline: ${({ borderInline }) => borderInline || 'none'};
  border-inline-start: ${({ borderInlineStart }) =>
    borderInlineStart || 'none'};
  border-inline-end: ${({ borderInlineEnd }) => borderInlineEnd || 'none'};
  border-block: ${({ borderBlock }) => borderBlock || 'none'};
  border-block-start: ${({ borderBlockStart }) => borderBlockStart || 'none'};
  border-block-end: ${({ borderBlockEnd }) => borderBlockEnd || 'none'};
  padding: ${({ padding }) => padding};
  padding-block: ${({ paddingBlock }) => paddingBlock};
  padding-block-start: ${({ paddingBlockStart }) => paddingBlockStart};
  padding-block-end: ${({ paddingBlockEnd }) => paddingBlockEnd};
  padding-inline: ${({ paddingInline }) => paddingInline};
  padding-inline-start: ${({ paddingInlineStart }) => paddingInlineStart};
  padding-inline-end: ${({ paddingInlinEnd }) => paddingInlinEnd};
  margin: ${({ margin }) => margin};
  margin-block: ${({ paddingBlock }) => paddingBlock};
  margin-block-start: ${({ paddingBlockStart }) => paddingBlockStart};
  margin-block-end: ${({ paddingBlockEnd }) => paddingBlockEnd};
  margin-inline: ${({ paddingInline }) => paddingInline};
  margin-inline-start: ${({ paddingInlineStart }) => paddingInlineStart};
  margin-inline-end: ${({ paddingInlinEnd }) => paddingInlinEnd};
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  @media (max-width: ${({ theme }) => theme.media.sm}) {
    width: ${({ width }) => width?.sm || width || 'fit-content'};
    max-width: ${({ theme }) => theme.media.xs};
  }
  @media (max-width: ${({ theme }) => theme.media.md}) {
    width: ${({ width }) => width?.md || width || 'fit-content'};
    max-width: ${({ theme }) => theme.media.sm};
  }
  @media (max-width: ${({ theme }) => theme.media.lg}) {
    width: ${({ width }) => width?.lg || width || 'fit-content'};
    max-width: ${({ theme }) => theme.media.lg};
  }
  @media (max-width: ${({ theme }) => theme.media.xl}) {
    width: ${({ width }) => width?.xl || width || 'fit-content'};
    max-width: ${({ theme }) => theme.media.xl};
  } ;
`;

export default Box;
