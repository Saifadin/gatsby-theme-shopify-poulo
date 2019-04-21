import React from 'react';
import { IoMdClose } from 'react-icons/io';

import { LineItem, ItemDetails, ItemTitle, ItemVariant, ItemPrice, ItemRemove, ItemQuantity, ItemImageWrapper, ItemImage } from './styles';

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
  currencyCode,
}: any) => {
  const itemPrice = Intl.NumberFormat(undefined, {
    currency: currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price));

  return (
    <LineItem>
      <ItemImageWrapper>
        <ItemImage src={src} />
      </ItemImageWrapper>
      <ItemDetails>
        <ItemTitle>{title}</ItemTitle>
        <ItemVariant>{variantTitle}</ItemVariant>
        <ItemQuantity>x{quantity}</ItemQuantity>
        <ItemPrice>{itemPrice}</ItemPrice>
        <ItemRemove onClick={() => removeFromCart(id)}>
          <IoMdClose size={20} />
        </ItemRemove>
      </ItemDetails>
    </LineItem>
  );
};

export default ProductItem;
