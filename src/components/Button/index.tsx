import React from 'react';

import { Button } from './styles';

const ButtonWrapper = ({ children }: any) => {
  return <Button appearance="light">{children}</Button>;
};

export default ButtonWrapper;
