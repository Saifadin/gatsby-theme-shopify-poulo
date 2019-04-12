import React, { useContext, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LayoutContext from '../../context/LayoutContext';
import ShopifyContext from '../../context/ShopifyContext';
import { Wrapper, BrandContainer, HomeLink, Brand, Menu, MenuItem, CartIcon, CartWrapper, CartCount } from './styles';

const getCount = ({ lineItems = [] }: any) => {
  let count = 0;
  lineItems.forEach(({ quantity }: any) => {
    count = count + parseFloat(quantity);
  });

  return count;
};

const Navigation: React.FunctionComponent = () => {
  const { activeScreen, setScreen } = useContext(LayoutContext);
  const { checkout = {} } = useContext(ShopifyContext);
  const [count, setCount] = useState(getCount(checkout));

  useEffect(() => {
    setCount(getCount(checkout));
  }, [checkout]);

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navigation {
            menu {
              link
              displayName
              subMenu {
                link
                displayName
              }
            }
          }
          shop {
            logo
          }
        }
      }
    }
  `);
  const {
    siteMetadata: {
      shop: { logo },
      navigation: { menu },
    },
  } = site;

  return (
    <Wrapper>
      <Menu>
        {menu.map(({ displayName, link, subMenu = [] }: any) => {
          return (
            <MenuItem key={link} to={link}>
              {displayName}
            </MenuItem>
          );
        })}
      </Menu>
      <BrandContainer>
        <HomeLink to="/">
          <Brand src={logo} />
        </HomeLink>
      </BrandContainer>
      {activeScreen === 'right' ? (
        <div />
      ) : (
        <CartWrapper>
          <CartIcon size={24} onClick={() => setScreen('right')} />
          {count ? <CartCount>{count}</CartCount> : null}
        </CartWrapper>
      )}
    </Wrapper>
  );
};

export default Navigation;
