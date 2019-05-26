import React from 'react';
import find from 'lodash/find';

import { CardList } from './styles';
import ProductCard from '../ProductCard';

interface ProductCardListType {
  products: any;
  handles?: string[];
  tag?: string;
  className?: string;
}

const ProductCardList: React.FC<ProductCardListType> = ({ products, handles, tag, className }) => {
  return (
    <CardList className={className}>
      {handles
        ? handles.map(handle => {
            const product = find(products, ({ node }) => handle === node.handle);
            if (product) return <ProductCard key={handle} product={product.node} />;
            return null;
          })
        : tag}
    </CardList>
  );
};

export default ProductCardList;
