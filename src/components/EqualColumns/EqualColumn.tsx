import React from 'react';

import Button from '../Button';
import { Column, ColumnContent } from './styles';

interface ColumnProps {
  buttonText?: React.ReactNode;
}

const EqualColumn: React.FC<ColumnProps> = ({ children, buttonText }) => {
  return (
    <Column>
      <ColumnContent>{children}</ColumnContent>
      {buttonText ? <Button>{buttonText}</Button> : null}
    </Column>
  );
};

export default EqualColumn;
