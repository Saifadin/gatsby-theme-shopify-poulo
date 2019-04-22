import React, { useContext, useState, useEffect } from 'react';

// @ts-ignore
import Empty from '../../images/empty-cart.svg';
import ShopifyContext from '../../context/ShopifyContext';
import LayoutContext from '../../context/LayoutContext';
import {
  Wrapper,
  Title,
  LineItems,
  CheckoutTotal,
  CheckoutTotalTitle,
  CheckoutPrice,
  EmptyContainer,
  EmptyText,
  EmptyImage,
  CloseIcon,
} from './styles';
import ProductItem from './Product';
import Button from '../Button';

const countQuantity = (lineItems = []): number => {
  let quantity = 0;

  lineItems.forEach((item: any) => {
    quantity = quantity + item.quantity;
  });

  return quantity;
};

const Cart = () => {
  const { checkout, removeFromCart } = useContext(ShopifyContext);
  const { setScreen } = useContext(LayoutContext);
  const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []));

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []));
  }, [checkout]);

  const price = Intl.NumberFormat(undefined, {
    currency: checkout ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(checkout ? checkout.paymentDue : 0));

  const openCheckout = () => {
    window.open(checkout.webUrl);
  };

  return (
    <Wrapper>
      <CloseIcon size={48} onClick={() => setScreen('main')} />
      <Title>My Cart ({quantity})</Title>
      {checkout && checkout!.lineItems.length > 0 ? (
        <LineItems>
          {checkout.lineItems.map((lineItem: any) => {
            return <ProductItem key={lineItem.id} {...lineItem} currencyCode={checkout.currencyCode} removeFromCart={removeFromCart} />;
          })}
        </LineItems>
      ) : (
        <EmptyContainer>
          <EmptyImage src={Empty} />
          <EmptyText>You didn't add anything to your cart yet.</EmptyText>
        </EmptyContainer>
      )}
      <CheckoutTotal>
        <CheckoutTotalTitle>Order Total</CheckoutTotalTitle>
        <CheckoutPrice>{price}</CheckoutPrice>
      </CheckoutTotal>
      {/* <CheckoutDisclaimer>You will be redirected to the Checkout Page to complete the Purchase</CheckoutDisclaimer> */}
      <Button onClick={openCheckout} disabled={!(checkout && checkout!.lineItems.length > 0)} appearance="dark">
        Checkout
      </Button>
    </Wrapper>
  );
};

export default Cart;
