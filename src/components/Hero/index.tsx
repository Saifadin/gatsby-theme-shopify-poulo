import React from 'react';

import { Wrapper, Background, HeroContent, Title, SubTitle } from './styles';

type HeroType = {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  background?: React.ReactNode;
  fullWidth?: boolean;
  height: number | string;
};

const Hero: React.FunctionComponent<HeroType> = ({
  title = 'Best Shop',
  subTitle = 'Shop for the best quality here',
  background,
  height,
  fullWidth,
  children,
}) => {
  return (
    <Wrapper height={height} fullWidth={fullWidth}>
      <Background>{background}</Background>
      <HeroContent>
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
