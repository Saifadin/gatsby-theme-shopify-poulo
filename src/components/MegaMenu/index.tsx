import React from 'react';

import MegaMenuContent from './Content';
import { Wrapper } from './styles';

interface MegaMenuProps {
  show: boolean;
  activeDisplayName: string;
  left: number;
  onMouseEnter: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ show, activeDisplayName, left, onMouseEnter, onMouseLeave }) => {
  return (
    <Wrapper left={left} showMegaMenu={show} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <MegaMenuContent activeDisplayName={activeDisplayName} />
    </Wrapper>
  );
};

export default MegaMenu;
