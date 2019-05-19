import styled from '@emotion/styled';
import { layout } from '../tokens';

interface WrapperProps {
  height?: string;
  fullWidth?: boolean;
  hasMargin?: boolean;
  contentPosition:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  position: relative;
  width: 100%;
  padding: ${layout.spacing * 5}px;
  z-index: 2;
  ${({ fullWidth }) => {
    if (!fullWidth)
      return `
      max-width: 1200px;
      margin: 0 auto;
    `;
  }};
  height: ${({ height }) => height};
  ${({ contentPosition }) => {
    const positions = contentPosition.split('-');
    if (positions[0] === 'top') return `align-items: flex-start;`;
    if (positions[0] === 'bottom') return `align-items: flex-end;`;
    return `align-items: center;`;
  }};
  ${({ contentPosition }) => {
    const positions = contentPosition.split('-');
    if (positions[1] === 'left') return `justify-content: flex-start;`;
    if (positions[1] === 'right') return `justify-content: flex-end;`;
    return `justify-content: center;`;
  }};
  margin-bottom: ${({ hasMargin }) => (hasMargin ? layout.spacing * 6 : 0)}px;
  @media (min-width: 768px) {
    padding: ${layout.spacing * 10}px;
  }
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;

interface ContentProps {
  contentPosition:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
}

export const HeroContent = styled.div<ContentProps>`
  /* width: 100%;
  max-width: 1200px;
  margin: 0 auto; */
  display: flex;
  flex-direction: column;
  color: white;
  ${({ contentPosition }) => {
    const positions = contentPosition.split('-');
    if (positions[1] === 'left') return `text-align: left; align-items: flex-start;`;
    if (positions[1] === 'right') return `text-align: right; align-items: flex-end;`;
    return `text-align: center; align-items: center;`;
  }};
`;
export const Title = styled.h2`
  margin: 0;
`;
export const SubTitle = styled.h3`
  margin: 0;
`;
