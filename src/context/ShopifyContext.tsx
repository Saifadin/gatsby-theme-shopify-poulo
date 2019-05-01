import React, { createContext, useState, useEffect } from 'react';
import localStorage from 'local-storage';
import Client from 'shopify-buy';

interface ShopifyContextType {
  checkout?: any;
  client?: Client.Client;
  addVariantToCart?(variantId: string, quantity: string): void;
  removeFromCart?(lineItemId: string): void;
  updateQuantityInCart?(lineItemId: string, quantity: number): void;
}

export const defaultContext: ShopifyContextType = {};

const ShopifyContext = createContext(defaultContext);

interface ProviderProps {
  accessToken: string;
  shopName: string;
}

export const ShopifyProvider: React.FunctionComponent<ProviderProps> = ({ shopName, accessToken, children }) => {
  const [client, setClient] = useState();
  const [checkout, setCheckout] = useState();
  const [random, setRandom] = useState();

  useEffect(() => {
    const newClient = Client.buildClient({
      domain: `${shopName}.myshopify.com`,
      storefrontAccessToken: accessToken,
    });

    setClient(newClient);
  }, [shopName, accessToken]);

  useEffect(() => {
    const checkoutId = localStorage('checkoutId');
    if (client && client.checkout) {
      if (checkoutId) {
        client.checkout.fetch(checkoutId).then((res: Client.CheckoutResource) => {
          if (res) {
            setCheckout(res);
          } else {
            client.checkout.create().then((resp: any) => {
              localStorage('checkoutId', resp.id);
              setCheckout(resp);
            });
          }
        });
      } else {
        client.checkout.create().then((res: any) => {
          localStorage('checkoutId', res.id);
          setCheckout(res);
        });
      }
    }
  }, [client]);

  const addVariantToCart = async (variantId: string, quantity: string) => {
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = checkout.id;

    const res = await client.checkout.addLineItems(checkoutId, lineItemsToAdd);

    await setCheckout(res);

    return res;
  };

  const updateQuantityInCart = async (lineItemId: string, quantity: number) => {
    const checkoutId = checkout.id;
    const lineItemsToUpdate = [{ id: lineItemId, quantity }];

    // Update the line item on the checkout (change the quantity or variant)
    const res = await client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);

    await setCheckout(res);

    return res;
  };

  const removeFromCart = async (lineItemId: string) => {
    const checkoutId = checkout.id;

    const res = await client.checkout.removeLineItems(checkoutId, [lineItemId]);

    await setCheckout(res);

    return res;
  };

  if (process.env.NODE_ENV === 'development') {
    console.group('ShopifyContext');
    console.log('ShopifyClient', client);
    console.log('CheckoutStatus', checkout);
    console.groupEnd();
  }

  return (
    <ShopifyContext.Provider value={{ checkout, client, addVariantToCart, updateQuantityInCart, removeFromCart }}>
      {children}
    </ShopifyContext.Provider>
  );
};

export default ShopifyContext;
