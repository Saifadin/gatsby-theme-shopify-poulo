import React, { useState, useContext } from 'react';
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';

import ShopifyContext from '../../context/ShopifyContext';
import {
  DetailsWrapper,
  ProductTitle,
  ProductPrice,
  ProductOptions,
  ProductName,
  ProductValues,
  ProductValue,
  ProductQuantity,
  ProductQuantitySelect,
  ProductQuantityLabel,
  AddToCart,
  AddedMessage,
} from './styles';

const ProductDetails = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice, maxVariantPrice },
  } = product;
  const [variant, setVariant] = useState({ ...initialVariant });
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addVariantToCart } = useContext(ShopifyContext);

  const isMinimum = minVariantPrice.amount !== maxVariantPrice.amount;
  const price = Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
  }).format(parseFloat(minVariantPrice.amount));

  const handleClick = (optionIndex, value) => {
    let currentOptions = [...variant.selectedOptions];
    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    };

    const selectedVariant = find(variants, ({ selectedOptions }) => isEqual(currentOptions, selectedOptions));

    setVariant({ ...selectedVariant });
  };

  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  };

  const addToCart = async () => {
    await addVariantToCart(variant.shopifyId, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

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
      <ProductQuantity>
        <ProductQuantityLabel htmlFor="quantity">Quantity</ProductQuantityLabel>
        <ProductQuantitySelect id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </ProductQuantitySelect>
      </ProductQuantity>
      <AddToCart type="button" onClick={addToCart}>
        Add to Cart
      </AddToCart>
      <AddedMessage added={added}>The item has been added to your Cart</AddedMessage>
    </DetailsWrapper>
  );
};

export default ProductDetails;
