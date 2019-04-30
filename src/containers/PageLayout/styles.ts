import styled from '@emotion/styled';
import { IoIosClose } from 'react-icons/io';

import { layout } from '../../components/tokens';

const sidebarWidth = 280;
const sidebarDesktopWidth = 490;

interface ScreenProps {
  active: string;
}

export const Wrapper = styled.div<ScreenProps>`
  display: grid;
  grid-template-columns: 100vw 100vw 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  width: calc(100vw * 3);
  ${({ active }) => {
    if (active === 'left') return 'left: 0;';
    if (active === 'right') return `left: -200vw;`;
    return `left: -100vw;`;
  }};
  transition: left 0.33s ease;
  @media (min-width: 490px) {
    grid-template-columns: ${sidebarDesktopWidth}px 1fr ${sidebarDesktopWidth}px;
    width: calc(100vw + ${sidebarDesktopWidth * 2}px);
    ${({ active }: ScreenProps) => {
      if (active === 'left') return 'left: 0;';
      if (active === 'right') return `left: -${sidebarDesktopWidth * 2}px;`;
      return `left: -${sidebarDesktopWidth}px;`;
    }};
  }
`;

export const Main = styled.main<ScreenProps>`
  overflow: ${({ active }) => (active === 'main' ? 'auto' : 'hidden')};
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface HeaderProps {
  transparentHeader?: boolean;
}

export const Header = styled.div<HeaderProps>`
  display: block;
  position: ${({ transparentHeader }) => (transparentHeader ? 'absolute' : 'relative')};
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const Content = styled.div`
  display: grid;
  overflow: scroll;
  height: 100vh;
  scroll-behavior: smooth;
  background-color: #fafafa;
`;

export const Overlay = styled.div<ScreenProps>`
  position: absolute;
  cursor: pointer;
  left: ${sidebarWidth}px;
  top: 0;
  width: ${({ active }) => (active === 'main' ? '0' : '100vw')};
  height: ${({ active }) => (active === 'main' ? '0' : '100vh')};
  background-color: ${({ active }: ScreenProps) => (active === 'main' ? 'transparent' : 'rgba(0, 0, 0, 0.35)')};
  transition: background-color 0.3s ease-in;
  z-index: 10;
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
    left: ${sidebarDesktopWidth + 36}px;
  }
`;

export const RightCloseIcon = styled(CloseIcon)`
  right: ${sidebarWidth}px;
  @media (min-width: 600px) {
    right: ${sidebarDesktopWidth + 36}px;
  }
`;
