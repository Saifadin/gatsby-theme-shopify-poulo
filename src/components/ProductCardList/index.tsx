import React from 'react';
import find from 'lodash/find';

import { CardList } from './styles';
import ProductCard from '../ProductCard';

type ProductCardListType = {
  products: any;
  handles?: Array<string>;
  tag?: string;
};

const ProductCardList: React.FunctionComponent<ProductCardListType> = ({ products, handles, tag }) => {
  return (
    <CardList>
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
