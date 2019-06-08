import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { layout } from '../tokens';

export const MenuWrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    > * {
      height: 100%;
    }
  }
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 ${layout.spacing * 1.5}px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const HoverMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 ${layout.spacing * 1.5}px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const HoverItem = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  padding: 0 ${layout.spacing * 1.5}px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  &:hover {
    text-decoration: underline;
  }
  > * {
    cursor: initial;
  }
`;
