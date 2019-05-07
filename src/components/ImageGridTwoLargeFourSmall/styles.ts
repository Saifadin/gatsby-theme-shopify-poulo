import styled from '@emotion/styled';
import Img from 'gatsby-image';
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
  grid-template-rows: repeat(2, 100vw);
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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, ${({ rowHeight }: any) => rowHeight || 300}px);
    & .ImageGrid-LargeChild {
      &:nth-of-type(1) {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
      }
      &:nth-of-type(2) {
        grid-column: 3 / span 2;
        grid-row: 2 / span 2;
      }
    }
  }
`;

export interface ChildProps {
  background: string;
  className?: string;
}

export const LargeChildWrapper = styled.div<ChildProps>`
  position: relative;
  background: ${({ background }) => background};
`;

export const SmallChildWrapper = styled.div<ChildProps>`
  position: relative;
  background: ${({ background }) => background};
  @media (max-width: 767px) {
    display: none;
  }
`;

export interface ImageProps {
  // background: string;
  className?: string;
}

export const BackgroundImage = styled(Img)<ImageProps>`
  height: 100%;
  width: 100%;
`;

export interface HoverWrapperProps {
  className?: string;
  hasHover?: boolean;
  hoverColor?: string;
  children: React.ReactNode;
}

export const HoverWrapper = styled.div<HoverWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.33s ease;
  &:hover {
    ${({ hasHover }) => (hasHover ? 'cursor: pointer;' : '')};
    background-color: ${({ hasHover, hoverColor }) => (hasHover ? hoverColor || `${colors.primaryColor}55` : 'transparent')};
  }
`;
