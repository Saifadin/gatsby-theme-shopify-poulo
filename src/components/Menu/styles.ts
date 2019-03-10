import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { layout, colors } from '../tokens';

export const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${layout.spacing * 3}px 0;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${layout.spacing * 3}px;
`;

export const PrimaryNavItemLink = styled(Link)`
  text-decoration: none;
  color: ${colors.color};
  font-size: 1.5rem;
  line-height: 1;
  width: 100%;
  font-weight: 300;
  padding: ${layout.spacing * 2}px;
  cursor: pointer;
  transition: all 0.35s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.11);
  }
`;

export const PrimaryNavItem = styled.div`
  font-size: 1.5rem;
  color: ${colors.color};
  line-height: 1;
  width: 100%;
  font-weight: 300;
  padding: ${layout.spacing * 2}px;
  cursor: pointer;
  transition: all 0.35s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.11);
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondaryNavItem = styled(Link)`
  text-decoration: none;
  color: ${colors.color};
  text-align: left;
  width: 100%;
  padding: ${layout.spacing * 2}px;
  padding-left: ${layout.spacing * 6}px;
  cursor: pointer;
  transition: all 0.35s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.11);
  }
`;
