import styled from 'styled-components';
import { calculateWidth } from './utils/utils';

const Box = styled.div<any>`
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ bg, theme }) => theme.colors[bg] || bg};
  border: ${({ border }) => border || ''};
  border-inline: ${({ borderInline }) => borderInline || ''};
  border-inline-start: ${({ borderInlineStart }) => borderInlineStart || ''};
  border-inline-end: ${({ borderInlineEnd }) => borderInlineEnd || ''};
  border-block: ${({ borderBlock }) => borderBlock || ''};
  border-block-start: ${({ borderBlockStart }) => borderBlockStart || ''};
  border-block-end: ${({ borderBlockEnd }) => borderBlockEnd || ''};
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
    width: ${({ width }) => calculateWidth(width, 'sm') || 'fit-content'};
    max-width: ${({ theme }) => theme.media.xs};
  }
  @media (max-width: ${({ theme }) => theme.media.md}) {
    width: ${({ width }) => calculateWidth(width, 'md') || 'fit-content'};
    max-width: ${({ theme }) => theme.media.sm};
  }
  @media (max-width: ${({ theme }) => theme.media.lg}) {
    width: ${({ width }) => calculateWidth(width, 'lg') || 'fit-content'};
    max-width: ${({ theme }) => theme.media.lg};
  }
  @media (max-width: ${({ theme }) => theme.media.xl}) {
    width: ${({ width }) => calculateWidth(width, 'xl') || 'fit-content'};
    max-width: ${({ theme }) => theme.media.xl};
  } ;
`;

export default Box;
