import React from 'react';

import MegaMenuContent from './Content';
import { Wrapper } from './styles';

const MegaMenu = ({ show, activeDisplayName }: any) => {
  return (
    <Wrapper showMegaMenu={show}>
      <MegaMenuContent activeDisplayName={activeDisplayName} />
    </Wrapper>
  );
};

export default MegaMenu;
