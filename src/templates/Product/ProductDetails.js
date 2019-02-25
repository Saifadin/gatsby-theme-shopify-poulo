import React, { useState } from 'react';
import find from 'lodash/find';

import { DetailsWrapper, ProductTitle, ProductPrice, ProductOptions, ProductName, ProductValues, ProductValue } from './styles';

const ProductDetails = ({ product }) => {
  const {
    options,
    variants,
    priceRange: { minVariantPrice, maxVariantPrice },
  } = product;
  const [variant, setVariant] = useState(variants[0]);

  const isMinimum = minVariantPrice.amount !== maxVariantPrice.amount;
  const price = Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
  }).format(parseFloat(minVariantPrice.amount));

  const handleClick = (optionIndex, value) => {
    let currentOptions = variant.selectedOptions;
    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    };
    const selectedVariant = find(variants, ({ selectedOptions }) => currentOptions === selectedOptions);

    console.log(selectedVariant);
    setVariant(selectedVariant);
  };
  console.log(variant);

  return (
    <DetailsWrapper>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{`${isMinimum ? 'from ' : ''}${price}`}</ProductPrice>
      {options.map(({ id, name, values }, optionIndex) => {
        return (
          <ProductOptions key={id}>
            <ProductName>{name}</ProductName>
            <ProductValues>
              {values.map(value => (
                <ProductValue
                  key={`${id}-${value}`}
                  active={variant.selectedOptions[optionIndex].value === value}
                  onClick={() => handleClick(optionIndex, value)}>
                  {value}
                </ProductValue>
              ))}
            </ProductValues>
          </ProductOptions>
        );
      })}
    </DetailsWrapper>
  );
};

export default ProductDetails;
