import React from 'react';
import { Wrapper, LargeChildWrapper, SmallChildWrapper, HoverWrapper } from './styles';

interface GridProps {
  className?: string;
  gap?: string;
  rowHeight?: number;
  fullWidth?: boolean;
}

const ImageGridTwoLargeFourSmall: React.FC<GridProps> = ({ className = '', fullWidth = false, gap, rowHeight, children }) => {
  return (
    <Wrapper className={className} gap={gap} rowHeight={rowHeight} fullWidth={fullWidth}>
      {children}
    </Wrapper>
  );
};

interface ChildProps {
  background: string;
  hasHover?: boolean;
  hoverColor?: string;
  className?: string;
}

export const LargeChild: React.FC<ChildProps> = ({ children, className = '', background, hasHover, hoverColor }) => {
  return (
    <LargeChildWrapper className={`ImageGrid-LargeChild ${className}`} background={background}>
      <HoverWrapper hoverColor={hoverColor} hasHover={hasHover}>
        {children}
      </HoverWrapper>
    </LargeChildWrapper>
  );
};

export const SmallChild: React.FC<ChildProps> = ({ children, className = '', background, hasHover, hoverColor }) => {
  return (
    <SmallChildWrapper className={`ImageGrid-SmallChild ${className}`} background={background}>
      <HoverWrapper hoverColor={hoverColor} hasHover={hasHover}>
        {children}
      </HoverWrapper>
    </SmallChildWrapper>
  );
};

export default ImageGridTwoLargeFourSmall;
