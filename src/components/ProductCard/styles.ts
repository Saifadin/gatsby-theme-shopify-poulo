import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { layout } from '../tokens';

export const Card = styled(Link)`
  overflow: hidden;
  display: block;
  width: 144px;
  text-align: left;
  /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.03), 0 20px 30px rgba(0, 0, 0, 0.1); */
  color: #000;
  text-decoration: none;
  transition: transform 0.3s ease;
  @media (min-width: 400px) {
    width: 312px;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
  /* &:hover {
    transform: translateY(-12px);
  } */
`;

export const ProductImageWrapper = styled.div``;
export const ProductImage = styled.img`
  margin: 0;
`;

export const ProductDetails = styled.div`
  padding: ${layout.spacing * 1.5}px 0;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: ${layout.spacing}px;
`;

export const ProductPrice = styled.span`
  font-size: 15px;
  line-height: 24px;
`;
