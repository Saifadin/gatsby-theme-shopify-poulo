import React, { useState, useContext } from 'react';
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';

import ShopifyContext from '../../context/ShopifyContext';
import Button from '../../components/Button';
import {
  DetailsWrapper,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductOptions,
  ProductName,
  ProductValues,
  ProductValue,
  ProductQuantity,
  ProductQuantityInput,
  ProductQuantityLabel,
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
      <ProductDescription>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </ProductDescription>
      <ProductPrice>{`${isMinimum ? 'from ' : ''}${price}`}</ProductPrice>
      {options.map(({ id, name, values }, optionIndex) => {
        return (
          <ProductOptions key={id}>
            <ProductName>Select {name}</ProductName>
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
        <ProductQuantityInput
          id="quantity"
          name="quantity"
          type="number"
          min="1"
          max="10"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </ProductQuantity>
      <Button appearance="dark" fullWidth type="button" onClick={addToCart}>
        Add to Cart
      </Button>
      <AddedMessage added={added}>The item has been added to your Cart</AddedMessage>
    </DetailsWrapper>
  );
};

export default ProductDetails;
