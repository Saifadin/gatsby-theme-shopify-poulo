import styled from '@emotion/styled';
import { IoIosClose } from 'react-icons/io';

import { layout } from '../../components/tokens';

const sidebarWidth = 280;
const sidebarDesktopWidth = 490;

interface ScreenProps {
  active: string;
}

export const Wrapper = styled.div<ScreenProps>`
  display: block;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  width: 100vw;
  transition: left 0.33s ease;
`;

export const Main = styled.main<ScreenProps>`
  overflow: ${({ active }) => (active === 'main' ? '' : 'hidden')};
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface HeaderProps {
  active?: string;
}

export const Header = styled.div<HeaderProps>`
  display: block;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 3;
  transition: left 0.33s ease;
`;

interface ContentProps {
  transparentHeader?: boolean;
}

export const Content = styled.div<ContentProps>`
  display: grid;
  overflow: scroll;
  height: 100vh;
  scroll-behavior: smooth;
  background-color: #fafafa;
  padding-top: ${({ transparentHeader }) => (transparentHeader ? 0 : layout.spacing * 9)}px;
  @media (min-width: 1024px) {
    /* padding-top: ${({ transparentHeader }) => (transparentHeader ? 0 : layout.spacing * 16)}px; */
  }
`;

export const Overlay = styled.div<ScreenProps>`
  position: absolute;
  cursor: pointer;
  left: 0;
  top: 0;
  width: ${({ active }) => (active === 'main' ? '0' : '100vw')};
  height: ${({ active }) => (active === 'main' ? '0' : '100vh')};
  background-color: ${({ active }: ScreenProps) => (active === 'main' ? 'transparent' : 'rgba(0, 0, 0, 0.35)')};
  transition: background-color 0.3s ease-in;
  z-index: 10;
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
