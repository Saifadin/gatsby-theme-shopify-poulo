import styled from '@emotion/styled';
import { IoIosClose } from 'react-icons/io';

import { layout } from '../../components/tokens';

const sidebarWidth = 280;
const sidebarDesktopWidth = 400;

type ScreenProps = {
  active: string;
};

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${sidebarWidth}px 1fr ${sidebarWidth}px;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  width: calc(100vw + ${sidebarWidth * 2}px);
  ${({ active }: ScreenProps) => {
    if (active === 'left') return 'left: 0;';
    if (active === 'right') return `left: -${sidebarWidth * 2}px;`;
    return `left: -${sidebarWidth}px;`;
  }};
  transition: left 0.33s ease;
  @media (min-width: 600px) {
    grid-template-columns: ${sidebarDesktopWidth}px 1fr ${sidebarDesktopWidth}px;
    width: calc(100vw + ${sidebarDesktopWidth * 2}px);
    ${({ active }: ScreenProps) => {
      if (active === 'left') return 'left: 0;';
      if (active === 'right') return `left: -${sidebarDesktopWidth * 2}px;`;
      return `left: -${sidebarDesktopWidth}px;`;
    }};
  }
`;

export const Main = styled.main`
  overflow: ${({ active }: ScreenProps) => (active === 'main' ? 'auto' : 'hidden')};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  overflow: scroll;
`;

export const Overlay = styled.div`
  position: absolute;
  cursor: pointer;
  left: ${sidebarWidth}px;
  top: 0;
  width: ${({ active }: ScreenProps) => (active === 'main' ? '0' : '100vw')};
  height: ${({ active }: ScreenProps) => (active === 'main' ? '0' : '100vh')};
  background-color: ${({ active }: ScreenProps) => (active === 'main' ? 'transparent' : 'rgba(0, 0, 0, 0.35)')};
  transition: background-color 0.3s ease-in;
  z-index: 1;
  @media (min-width: 600px) {
    left: ${sidebarDesktopWidth}px;
  }
`;

const CloseIcon = styled(IoIosClose)`
  position: absolute;
  cursor: pointer;
  top: ${layout.spacing * 1.5}px;
  z-index: 10;
  color: white;
`;

export const LeftCloseIcon = styled(CloseIcon)`
  left: ${sidebarWidth}px;
  @media (min-width: 600px) {
    left: ${sidebarDesktopWidth}px;
  }
`;

export const RightCloseIcon = styled(CloseIcon)`
  right: ${sidebarWidth}px;
  @media (min-width: 600px) {
    right: ${sidebarDesktopWidth}px;
  }
`;

/**
 * Menu.tsx
 */
export const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavItem = styled.div`
  text-align: center;
  width: 100%;
  font-weight: bold;
  padding: ${layout.spacing * 2}px;
  cursor: pointer;
  transition: all 0.35s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.11);
  }
`;
