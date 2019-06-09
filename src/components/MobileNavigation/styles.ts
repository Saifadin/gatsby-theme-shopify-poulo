import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { IoIosClose } from 'react-icons/io';

import { colors, layout } from '../tokens';

const sidebarDesktopWidth = 490;

interface WrapperProps {
  active: boolean;
}

export const MobileNav = styled.div<WrapperProps>`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow: scroll;
  z-index: 10;
  top: 0;
  left: ${({ active }) => (active ? 0 : '-100vw')};
  background: white;
  padding-top: ${layout.spacing * 9}px;
  transition: left 0.33s ease;
  @media (min-width: 490px) {
    width: ${sidebarDesktopWidth}px;
    left: ${({ active }) => (active ? 0 : -sidebarDesktopWidth)}px;
  }
`;

export const CloseIcon = styled(IoIosClose)`
  position: absolute;
  cursor: pointer;
  top: ${layout.spacing * 1.5}px;
  right: 0;
  z-index: 10;
  color: #000;
  @media (min-width: 600px) {
    top: ${layout.spacing * 3}px;
    right: ${layout.spacing * 3}px;
  }
`;

export const MenuItem = styled(Link)`
  border: solid 1px #d9d9d9;
  color: #000;
  padding: ${layout.spacing * 3.375}px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.3px;
`;
