import React, { useState, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';

import ShopifyContext from '../../context/ShopifyContext';
import Button from '../../components/Button';
import NumberInput from '../../components/NumberInput';
import {
  DetailsWrapper,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductOptions,
  ProductName,
  ProductValues,
  ProductValue,
  ProductColorValue,
  ProductQuantity,
  AddedMessage,
} from './styles';
import { ShopifyProduct } from '.';

interface Props {
  product: ShopifyProduct;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
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
  const {
    site: {
      siteMetadata: { colorMap },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          colorMap {
            key
            value
          }
        }
      }
    }
  `);

  const isMinimum = minVariantPrice.amount !== maxVariantPrice.amount;
  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(minVariantPrice.amount));

  const handleClick = (optionIndex: any, value: any) => {
    const currentOptions = [...variant.selectedOptions];

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    };

    const selectedVariant = find(variants, ({ selectedOptions }) => isEqual(currentOptions, selectedOptions));

    // @ts-ignore
    setVariant({ ...selectedVariant });
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  // const handleQuantityPlus = () => {
  //   setQuantity(quantity + 1 === 11 ? quantity : quantity + 1);
  // };

  // const handleQuantityMinus = () => {
  //   setQuantity(quantity - 1 === 0 ? quantity : quantity - 1);
  // };

  const addToCart = async () => {
    await addVariantToCart!(variant.shopifyId, quantity.toString());
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <DetailsWrapper>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{`${isMinimum ? 'from ' : ''}${price}`}</ProductPrice>
      <ProductDescription>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </ProductDescription>
      {options.map(({ id, name, values }, optionIndex) => {
        return (
          <ProductOptions key={id}>
            <ProductName>Select {name}</ProductName>
            <ProductValues>
              {values.map(value => {
                if (name === 'Color') {
                  const color = (colorMap || []).find(({ key }: any) => key === value);

                  if (!color) return;
                  return (
                    <ProductColorValue
                      key={`${id}-${value}`}
                      active={variant.selectedOptions[optionIndex].value === value}
                      color={color.value}
                      title={value}
                      onClick={() => handleClick(optionIndex, value)}
                    />
                  );
                }
                return (
                  <ProductValue
                    key={`${id}-${value}`}
                    active={variant.selectedOptions[optionIndex].value === value}
                    onClick={() => handleClick(optionIndex, value)}>
                    {value}
                  </ProductValue>
                );
              })}
            </ProductValues>
          </ProductOptions>
        );
      })}
      <ProductQuantity label="Quantity" id="quantity" name="quantity" min={1} max={10} value={quantity} onChange={handleQuantityChange} />
      <Button appearance="dark" fullWidth={true} type="button" onClick={addToCart}>
        Add to Bag
      </Button>
      <AddedMessage added={added}>The item has been added to your Bag</AddedMessage>
    </DetailsWrapper>
  );
};

export default ProductDetails;
