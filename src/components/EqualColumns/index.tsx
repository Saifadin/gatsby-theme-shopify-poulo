import React from 'react';
import { Wrapper } from './styles';

interface EqualColumnsProps {
  background?: string;
}

const EqualColumns: React.FC<EqualColumnsProps> = ({ children, background }) => {
  return <Wrapper background={background}>{children}</Wrapper>;
};

export default EqualColumns;
