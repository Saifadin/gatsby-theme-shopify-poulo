import React from 'react';

import { Wrapper, Background, HeroContent, Title, SubTitle } from './styles';

interface HeroType {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  background?: React.ReactNode;
  fullWidth?: boolean;
  hasMargin?: boolean;
  height?: string;
  contentPosition?:
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

const Hero: React.FunctionComponent<HeroType> = ({
  title = 'Best Shop',
  subTitle = 'Shop for the best quality here',
  background,
  height = '75vh',
  fullWidth,
  children,
  hasMargin = false,
  contentPosition = 'center-center',
}) => {
  return (
    <Wrapper height={height} fullWidth={fullWidth} contentPosition={contentPosition} hasMargin={hasMargin}>
      <Background>{background}</Background>
      <HeroContent contentPosition={contentPosition}>
        {children || (
          <React.Fragment>
            {title ? <Title>{title}</Title> : null}
            {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
          </React.Fragment>
        )}
      </HeroContent>
    </Wrapper>
  );
};

export default Hero;
