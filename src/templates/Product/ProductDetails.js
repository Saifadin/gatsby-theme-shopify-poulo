import React from 'react';

import { DetailsWrapper, ProductTitle, ProductPrice, ProductOptions, ProductName, ProductValues, ProductValue } from './styles';

const ProductDetails = ({ product }) => {
  const {
    options,
    priceRange: { minVariantPrice, maxVariantPrice },
  } = product;
  const isMinimum = minVariantPrice.amount !== maxVariantPrice.amount;
  const price = Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
  }).format(parseFloat(minVariantPrice.amount));

  return (
    <DetailsWrapper>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{`${isMinimum ? 'from ' : ''}${price}`}</ProductPrice>
      {options.map(({ id, name, values }) => {
        return (
          <ProductOptions key={id}>
            <ProductName>{name}</ProductName>
            <ProductValues>
              {values.map(value => (
                <ProductValue key={`${id}-${value}`}>{value}</ProductValue>
              ))}
            </ProductValues>
          </ProductOptions>
        );
      })}
    </DetailsWrapper>
  );
};

export default ProductDetails;
