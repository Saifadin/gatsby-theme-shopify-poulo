import React from 'react';
import { IoMdClose } from 'react-icons/io';

import {
  LineItem,
  ItemDetails,
  ItemTitleRemove,
  ItemTitle,
  ItemRemove,
  ItemVariant,
  ItemPrice,
  ItemQuantityPrice,
  ItemImageWrapper,
  ItemImage,
} from './styles';
import NumberInput from '../NumberInput/index';

const ProductItem: React.FunctionComponent = ({
  id,
  title,
  quantity,
  variant: {
    price,
    title: variantTitle,
    image: { src },
  },
  removeFromCart,
  updateQuantityInCart,
  currencyCode,
}: any) => {
  const itemPrice = Intl.NumberFormat(undefined, {
    currency: currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price));

  const handleOnChange = (value: number) => {
    updateQuantityInCart(id, value);
  };

  return (
    <LineItem>
      <ItemImageWrapper>
        <ItemImage src={src} />
      </ItemImageWrapper>
      <ItemDetails>
        <ItemTitleRemove>
          <ItemTitle>{title}</ItemTitle>
          <ItemRemove onClick={() => removeFromCart(id)}>
            <IoMdClose size={20} />
          </ItemRemove>
        </ItemTitleRemove>
        <ItemVariant>{variantTitle}</ItemVariant>
        <ItemQuantityPrice>
          <NumberInput name={`quantity-${id}`} min={1} max={10} value={quantity} onChange={handleOnChange} isLight={true} />
          <ItemPrice>{itemPrice}</ItemPrice>
        </ItemQuantityPrice>
      </ItemDetails>
    </LineItem>
  );
};

export default ProductItem;
