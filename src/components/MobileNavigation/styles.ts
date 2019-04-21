import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { colors, layout } from '../tokens';

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
