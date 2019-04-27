import React from 'react';

import { HoverWrapper } from '../ImageGridTwoLargeFourSmall/styles';
import { Wrapper, FullwidthChildWrapper, OneHalfChildWrapper } from './styles';

interface GridProps {
  className?: string;
  gap?: string;
  rowHeight?: number;
  fullWidth?: boolean;
}

const ImageGridTwoHalfOneFullwidth: React.FC<GridProps> = ({ className = '', fullWidth = false, gap, rowHeight, children }) => {
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

export const FullwidthChild: React.FC<ChildProps> = ({ children, className = '', background, hasHover, hoverColor }) => {
  return (
    <FullwidthChildWrapper className={`ImageGrid-FullwidthChild ${className}`} background={background}>
      <HoverWrapper hoverColor={hoverColor} hasHover={hasHover}>
        {children}
      </HoverWrapper>
    </FullwidthChildWrapper>
  );
};

export const OneHalfChild: React.FC<ChildProps> = ({ children, className = '', background, hasHover, hoverColor }) => {
  return (
    <OneHalfChildWrapper className={`ImageGrid-OneHalfChild ${className}`} background={background}>
      <HoverWrapper hoverColor={hoverColor} hasHover={hasHover}>
        {children}
      </HoverWrapper>
    </OneHalfChildWrapper>
  );
};

export default ImageGridTwoHalfOneFullwidth;
