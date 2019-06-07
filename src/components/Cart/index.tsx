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
  CloseIcon,
} from './styles';
import ProductItem from './Product';
import Button from '../Button';
import { Link } from 'gatsby';

const countQuantity = (lineItems = []): number => {
  let quantity = 0;

  lineItems.forEach((item: any) => {
    quantity = quantity + item.quantity;
  });

  return quantity;
};

const Cart = () => {
  const { checkout, updateQuantityInCart, removeFromCart } = useContext(ShopifyContext);
  const { setScreen, activeScreen } = useContext(LayoutContext);
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
    <Wrapper active={activeScreen === 'right'}>
      <CloseIcon size={48} onClick={() => setScreen('main')} />
      <Title marginMultiplier={4}>My Bag ({quantity})</Title>
      {checkout && checkout!.lineItems.length > 0 ? (
        <>
          <LineItems>
            {checkout.lineItems.map((lineItem: any) => {
              return (
                <ProductItem
                  key={lineItem.id}
                  {...lineItem}
                  currencyCode={checkout.currencyCode}
                  removeFromCart={removeFromCart}
                  updateQuantityInCart={updateQuantityInCart}
                />
              );
            })}
            {checkout.lineItems.length > 1 ? null : (
              <Button onClick={() => setScreen('main')} disabled={!(checkout && checkout!.lineItems.length > 0)} appearance="dark">
                Continue Shopping
              </Button>
            )}
          </LineItems>
          <CheckoutTotal>
            <CheckoutTotalTitle>Order Total</CheckoutTotalTitle>
            <CheckoutPrice>{price}</CheckoutPrice>
          </CheckoutTotal>
          <Button onClick={openCheckout} disabled={!(checkout && checkout!.lineItems.length > 0)} appearance="primary">
            Checkout
          </Button>
        </>
      ) : (
        <EmptyContainer>
          {/* <EmptyImage src={Empty} alt="Women looking at empty Cart" /> */}
          <EmptyText marginMultiplier={4}>YOUR BAG IS CURRENTLY EMPTY.</EmptyText>
          <Button
            as={Link}
            onClick={() => setScreen('main')}
            to="/"
            disabled={!(checkout && checkout!.lineItems.length > 0)}
            appearance="hollow">
            Continue Shopping
          </Button>
        </EmptyContainer>
      )}
    </Wrapper>
  );
};

export default Cart;
