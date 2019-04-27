import styled from '@emotion/styled';
import { colors } from '../tokens';

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
  grid-template-rows: repeat(3, 100vw);
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, ${({ rowHeight }: any) => rowHeight || 300}px);
  }
`;

export interface ChildProps {
  background: string;
  className?: string;
  children: React.ReactNode;
}

export const FullwidthChildWrapper = styled.div<ChildProps>`
  background: ${({ background }) => background};
  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 2 / span 2;
  }
`;
export const OneHalfChildWrapper = styled.div<ChildProps>`
  background: ${({ background }) => background};
`;
