import React, { useContext } from 'react';

// @ts-ignore
import Empty from '../../images/empty-cart.svg';
import ShopifyContext from '../../context/ShopifyContext';
import {
  Wrapper,
  Title,
  LineItems,
  CheckoutPrice,
  CheckoutButton,
  CheckoutDisclaimer,
  EmptyContainer,
  EmptyText,
  EmptyImage,
} from './styles';
import ProductItem from './Product';

const Cart = () => {
  const { checkout, removeFromCart } = useContext(ShopifyContext);
  const price = Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: checkout ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
  }).format(parseFloat(checkout ? checkout.paymentDue : 0));

  const openCheckout = () => {
    window.open(checkout.webUrl);
  };

  return (
    <Wrapper>
      <Title>Your Cart</Title>
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
      <CheckoutPrice>Total Price: {price}</CheckoutPrice>
      <CheckoutDisclaimer>You will be redirected to the Checkout Page to complete the Purchase</CheckoutDisclaimer>
      <CheckoutButton onClick={openCheckout} disabled={!(checkout && checkout!.lineItems.length > 0)}>
        Checkout
      </CheckoutButton>
    </Wrapper>
  );
};

export default Cart;
