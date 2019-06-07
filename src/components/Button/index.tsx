import React from 'react';

import { Button } from './styles';
import { Link } from 'gatsby';

const ButtonWrapper = ({ children, type = 'button', appearance = 'light', fullWidth = false, ...rest }: any) => {
  return (
    <Button appearance={appearance} type={type} fullWidth={fullWidth} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;

const ButtonA = Button.withComponent(Link);

export const ButtonLink = ({ children, appearance = 'light', fullWidth = false, ...rest }: any) => {
  return (
    <ButtonA appearance={appearance} fullWidth={fullWidth} {...rest}>
      {children}
    </ButtonA>
  );
};
