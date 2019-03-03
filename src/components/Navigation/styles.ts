import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { IoIosCart, IoIosClose, IoIosMenu } from 'react-icons/io';

import layout from '../tokens/layout';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  align-items: center;
  padding: ${layout.spacing * 2}px;
  box-shadow: inset 0 -1px 0 #eee;
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
  background-color: rgba(255, 0, 0, 0.95);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 0.66rem;
  text-align: center;
  color: white;
`;
export const CloseIcon = styled(IoIosClose)`
  cursor: pointer;
`;
