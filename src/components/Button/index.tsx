import React from 'react';

import { Button } from './styles';

const ButtonWrapper = ({ children, onClick, type = 'button', appearance = 'light', fullWidth = false }: any) => {
  return (
    <Button appearance={appearance} onClick={onClick} type={type} fullWidth={fullWidth}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
