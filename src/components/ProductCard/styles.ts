import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { layout } from '../tokens';

export const Card = styled(Link)`
  overflow: hidden;
  display: block;
  width: 100%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.03), 0 20px 30px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #000;
  text-decoration: none;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-12px);
  }
`;

export const ProductImageWrapper = styled.div``;
export const ProductImage = styled.img`
  margin: 0;
`;

export const ProductDetails = styled.div`
  padding: ${layout.spacing * 2}px;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const ProductPrice = styled.span`
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
`;
