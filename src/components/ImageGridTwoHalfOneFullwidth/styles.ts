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
  grid-auto-rows: ${({ rowHeight }: any) => `${rowHeight}px` || '50vh'};
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
    grid-auto-rows: ${({ rowHeight }: any) => rowHeight || 300}px;
  }
`;

export interface ChildProps {
  background: string;
  className?: string;
  hideOnMobile?: boolean;
}

export const FullwidthChildWrapper = styled.div<ChildProps>`
  display: ${({ hideOnMobile }) => (hideOnMobile ? 'none' : 'block')};
  position: relative;
  background: ${({ background }) => background};
  @media (min-width: 768px) {
    display: block;
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
  }
`;
export const OneHalfChildWrapper = styled.div<ChildProps>`
  display: ${({ hideOnMobile }) => (hideOnMobile ? 'none' : 'block')};
  position: relative;
  background: ${({ background }) => background};
  @media (min-width: 768px) {
    display: block;
  }
`;
