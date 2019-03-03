import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

import { LineItem, ItemTitle, ItemVariant, ItemPrice, ItemRemove, ItemQuantity } from './styles';

const ProductItem: React.FunctionComponent = ({
  id,
  title,
  quantity,
  variant: { price, title: variantTitle },
  removeFromCart,
  currencyCode,
}: any) => {
  const itemPrice = Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
  }).format(parseFloat(price));

  return (
    <LineItem>
      <ItemTitle>{title}</ItemTitle>
      <ItemVariant>{variantTitle}</ItemVariant>
      <ItemQuantity>x{quantity}</ItemQuantity>
      <ItemPrice>{itemPrice}</ItemPrice>
      <ItemRemove onClick={() => removeFromCart(id)}>
        <TiDeleteOutline size={20} />
      </ItemRemove>
    </LineItem>
  );
};

export default ProductItem;
