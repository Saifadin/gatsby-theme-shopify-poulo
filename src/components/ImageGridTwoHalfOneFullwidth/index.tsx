import React from 'react';

import { HoverWrapper, BackgroundImage } from '../ImageGridTwoLargeFourSmall/styles';
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
  backgroundFluid?: any;
  backgroundFixed?: any;
  backgroundImgStyle?: any;
  backgroundAlt?: string;
  background?: string;
  hasHover?: boolean;
  hideOnMobile?: boolean;
  hoverColor?: string;
  className?: string;
}

export const FullwidthChild: React.FC<ChildProps> = ({
  children,
  className = '',
  backgroundFixed,
  backgroundFluid,
  backgroundImgStyle,
  backgroundAlt = 'fullwidth image',
  background = '',
  hideOnMobile = false,
  hasHover,
  hoverColor,
}) => {
  return (
    <FullwidthChildWrapper className={`ImageGrid-FullwidthChild ${className}`} background={background} hideOnMobile={hideOnMobile}>
      {backgroundFluid ? (
        <BackgroundImage
          fluid={backgroundFluid}
          alt={backgroundAlt}
          imgStyle={{ objectFit: 'cover', objectPosition: 'center center', ...backgroundImgStyle }}
        />
      ) : null}
      {backgroundFixed ? (
        <BackgroundImage
          fixed={backgroundFluid}
          alt={backgroundAlt}
          imgStyle={{ objectFit: 'cover', objectPosition: 'center center', ...backgroundImgStyle }}
        />
      ) : null}
      <HoverWrapper hoverColor={hoverColor} hasHover={hasHover}>
        {children}
      </HoverWrapper>
    </FullwidthChildWrapper>
  );
};

export const OneHalfChild: React.FC<ChildProps> = ({
  children,
  className = '',
  background = '',
  backgroundFixed,
  backgroundFluid,
  backgroundImgStyle,
  backgroundAlt = 'onehalf image',
  hideOnMobile = false,
  hasHover,
  hoverColor,
}) => {
  return (
    <OneHalfChildWrapper className={`ImageGrid-OneHalfChild ${className}`} background={background} hideOnMobile={hideOnMobile}>
      {backgroundFluid ? (
        <BackgroundImage
          fluid={backgroundFluid}
          alt={backgroundAlt}
          imgStyle={{ objectFit: 'cover', objectPosition: 'center center', ...backgroundImgStyle }}
        />
      ) : null}
      {backgroundFixed ? (
        <BackgroundImage
          fixed={backgroundFluid}
          alt={backgroundAlt}
          imgStyle={{ objectFit: 'cover', objectPosition: 'center center', ...backgroundImgStyle }}
        />
      ) : null}
      <HoverWrapper hoverColor={hoverColor} hasHover={hasHover}>
        {children}
      </HoverWrapper>
    </OneHalfChildWrapper>
  );
};

export default ImageGridTwoHalfOneFullwidth;
