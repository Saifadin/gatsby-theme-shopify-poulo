import React from 'react';

import { MenuIconWrapper } from './styles';

interface IconProps {
  size?: number;
  color?: string;
  onClick?(event: any): void;
}

const MenuIcon: React.FC<IconProps> = ({ onClick, color, size = 24 }) => {
  return (
    <MenuIconWrapper onClick={onClick} style={{ color }}>
      <svg width={size} height={size} viewBox="0 0 20 10">
        <g id="Hamburger-Menu" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
          <path d="M1.29032258,1.5 L18.7096774,1.5" id="Line-1" stroke="currentColor" strokeWidth="2" />
          <path d="M1.29032258,8.5 L18.7096774,8.5" id="Line-2" stroke="currentColor" strokeWidth="2" />
        </g>
      </svg>
    </MenuIconWrapper>
  );
};

export default MenuIcon;
