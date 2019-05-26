import React from 'react';

import { Button } from './styles';
import { Link } from 'gatsby';

const ButtonWrapper = ({ children, className, onClick, type = 'button', appearance = 'light', fullWidth = false }: any) => {
  return (
    <Button className={className} appearance={appearance} onClick={onClick} type={type} fullWidth={fullWidth}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;

const ButtonA = Button.withComponent(Link);

export const ButtonLink = ({ children, className, to, appearance = 'light', fullWidth = false }: any) => {
  return (
    <ButtonA className={className} appearance={appearance} to={to} fullWidth={fullWidth}>
      {children}
    </ButtonA>
  );
};
