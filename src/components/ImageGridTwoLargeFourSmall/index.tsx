import React from 'react';
import { Wrapper, LargeChildWrapper, SmallChildWrapper } from './styles';

interface GridProps {
  className?: string;
  gap?: string;
  rowHeight?: number;
}

const ImageGridTwoLargeFourSmall: React.FC<GridProps> = ({ className = '', gap, rowHeight, children }) => {
  return (
    <Wrapper className={className} gap={gap} rowHeight={rowHeight}>
      {children}
    </Wrapper>
  );
};

interface ChildProps {
  background: string;
  className?: string;
}

export const LargeChild: React.FC<ChildProps> = ({ children, className = '', background }) => {
  return (
    <LargeChildWrapper className={`ImageGrid-LargeChild ${className}`} background={background}>
      {children}
    </LargeChildWrapper>
  );
};

export const SmallChild: React.FC<ChildProps> = ({ children, className = '', background }) => {
  return (
    <SmallChildWrapper className={`ImageGrid-SmallChild ${className}`} background={background}>
      {children}
    </SmallChildWrapper>
  );
};

export default ImageGridTwoLargeFourSmall;
