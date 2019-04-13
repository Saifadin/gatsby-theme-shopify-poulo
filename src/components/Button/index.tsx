import React from 'react';

import { Button } from './styles';

const ButtonWrapper = ({ children, onClick, type = 'button', appearance = 'light' }: any) => {
  return (
    <Button appearance={appearance} onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
