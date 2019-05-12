import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { IoIosCart, IoIosClose, IoIosMenu } from 'react-icons/io';

import layout from '../tokens/layout';
import { colors } from '../tokens';

interface WrapperProps {
  transparentHeader?: boolean;
  transparentColor?: string;
  isScrolling?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: ${layout.spacing * 3}px;
  align-items: center;
  height: 72px;
  padding: 0 ${layout.spacing * 1.5}px;
  background-color: ${({ transparentHeader, isScrolling }) => (isScrolling || !transparentHeader ? 'white' : 'transparent')};
  border-bottom: ${({ isScrolling }) => (isScrolling ? '1px solid #ddd' : 'none')};
  transition: all 0.3s ease;
  @media (min-width: 600px) {
    padding: 0 ${layout.spacing * 6}px;
  }
  @media (min-width: 1024px) {
    /* height: ${({ isScrolling }) => (isScrolling ? 72 : 128)}px; */
    padding: 0 ${layout.spacing * 6}px;
  }
  a {
    color: ${({ transparentHeader, transparentColor, isScrolling }) =>
      transparentHeader && !isScrolling ? transparentColor || 'white' : colors.color};
    transition: all 0.3s ease;
  }
`;

export const Menu = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

export const MenuItem = styled(Link)`
  margin: 0 ${layout.spacing * 1.5}px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  &:hover {
    text-decoration: underline;
  }
  &:first-of-type {
    margin-left: 0;
  }
`;

export const BrandContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Brand = styled.img`
  margin: 0;
  height: 40px;
  width: auto;
`;

export const MenuIconWrapper = styled.div`
  cursor: pointer;
  height: 24px;
  width: 24px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const CartWrapper = styled.div`
  justify-self: flex-end;
  position: relative;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

export const CartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryColor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: -4px;
  left: -4px;
  font-size: 10px;
  text-align: center;
  color: ${colors.colorOnPrimary};
`;
export const CloseIcon = styled(IoIosClose)`
  cursor: pointer;
`;
