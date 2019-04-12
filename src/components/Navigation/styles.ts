import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { IoIosCart, IoIosClose, IoIosMenu } from 'react-icons/io';

import layout from '../tokens/layout';
import { colors } from '../tokens';

interface WrapperProps {
  transparentHeader?: boolean;
  isScrolling?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  align-items: center;
  padding: ${layout.spacing * 2}px ${layout.spacing * 6}px;
  background-color: ${({ transparentHeader, isScrolling }) => (isScrolling || !transparentHeader ? 'white' : 'transparent')};
  a {
    color: ${({ transparentHeader, isScrolling }) => (transparentHeader && !isScrolling ? 'white' : colors.color)};
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled(Link)`
  margin: 0 ${layout.spacing * 3}px;
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

export const HomeLink = styled(Link)``;

export const Brand = styled.img`
  margin: 0;
  height: 32px;
  width: auto;
  margin-right: ${layout.spacing}px;
`;

export const MenuIcon = styled(IoIosMenu)`
  cursor: pointer;
`;
export const CartWrapper = styled.div`
  position: relative;
  height: 24px;
  width: 24px;
`;
export const CartIcon = styled(IoIosCart)`
  cursor: pointer;
`;
export const CartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryColor};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 0.66rem;
  text-align: center;
  color: ${colors.colorOnPrimary};
`;
export const CloseIcon = styled(IoIosClose)`
  cursor: pointer;
`;
