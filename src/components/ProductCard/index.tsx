import React from 'react';

import CardImage from './CardImage';
import { Card, ProductDetails, ProductTitle, ProductPrice } from './styles';

interface Product {
  title: string;
  images: Array<any>;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

type ProductCard = {
  product: Product;
};

const ProductCard: React.FunctionComponent<ProductCard> = ({ product }) => {
  const {
    priceRange: { minVariantPrice, maxVariantPrice },
  } = product;
  const isMinimum = minVariantPrice.amount !== maxVariantPrice.amount;
  const price = Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
  }).format(parseFloat(minVariantPrice.amount));

  return (
    <Card>
      <CardImage images={product.images} />
      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{`${isMinimum ? 'from ' : ''}${price}`}</ProductPrice>
      </ProductDetails>
    </Card>
  );
};

export default ProductCard;
