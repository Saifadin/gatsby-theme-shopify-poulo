import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
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

interface NavigationProps {
  transparentHeader?: boolean;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({ transparentHeader }) => {
  const { activeScreen, setScreen } = useContext(LayoutContext);
  const { checkout = {} } = useContext(ShopifyContext);
  const [count, setCount] = useState(getCount(checkout));
  const [isScrolling, setIsScrolling] = useState(false);

  useLayoutEffect(() => {
    const element = document.getElementById('main-content');

    const handleScroll = (event: any) => {
      setIsScrolling(event.target.scrollTop > 0);
    };

    element!.addEventListener('scroll', handleScroll);
    return () => element!.removeEventListener('scroll', handleScroll);
  });

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
    <Wrapper transparentHeader={transparentHeader} isScrolling={isScrolling}>
      <BrandContainer>
        <HomeLink to="/">
          <Brand src={logo} />
        </HomeLink>
      </BrandContainer>
      <Menu>
        {menu.map(({ displayName, link, subMenu = [] }: any) => {
          return (
            <MenuItem key={link} to={link}>
              {displayName}
            </MenuItem>
          );
        })}
      </Menu>
      {activeScreen === 'right' ? (
        <div />
      ) : (
        <CartWrapper>
          <CartIcon size={24} onClick={() => setScreen('right')} color={isScrolling || !transparentHeader ? 'black' : 'white'} />
          {count ? <CartCount>{count}</CartCount> : null}
        </CartWrapper>
      )}
    </Wrapper>
  );
};

export default Navigation;
