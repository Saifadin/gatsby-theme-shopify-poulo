import styled from '@emotion/styled';
import { colors } from '../tokens/index';

interface WrapperProps {
  gap?: string;
  rowHeight?: number;
  className?: string;
  children: React.ReactNode;
  fullWidth: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ gap }: any) => gap || ''};
  ${({ fullWidth }) => {
    if (!fullWidth) {
      return `
        max-width: 1200px;
        margin: 0 auto;
      `;
    }
    return '';
  }};
  width: 100%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
