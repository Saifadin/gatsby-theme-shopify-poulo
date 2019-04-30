import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// @ts-ignore
import Logo from '../../images/logo.png';
import LayoutContext from '../../context/LayoutContext';
import ShopifyContext from '../../context/ShopifyContext';
import { Wrapper, BrandContainer, HomeLink, Brand, Menu, MenuIcon, MenuItem, CartIcon, CartWrapper, CartCount } from './styles';

const getCount = ({ lineItems = [] }: any) => {
  let count = 0;
  lineItems.forEach(({ quantity }: any) => {
    count = count + parseFloat(quantity);
  });

  return count;
};

interface NavigationProps {
  transparentHeader?: boolean;
  transparentColor?: string;
  transparentLogo?: string;
  scrollingLogo?: string;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({ transparentHeader, scrollingLogo, transparentLogo, transparentColor }) => {
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
        }
      }
    }
  `);
  const {
    siteMetadata: {
      navigation: { menu },
    },
  } = site;

  return (
    <Wrapper transparentHeader={transparentHeader} transparentColor={transparentColor} isScrolling={isScrolling}>
      {activeScreen === 'left' ? (
        <div />
      ) : (
        <MenuIcon
          size={24}
          onClick={() => setScreen('left')}
          color={isScrolling || !transparentHeader ? 'black' : transparentColor || 'white'}
        />
      )}
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
          {!isScrolling && transparentHeader && transparentLogo ? <Brand src={transparentLogo} /> : null}
          {isScrolling && scrollingLogo ? <Brand src={scrollingLogo} /> : null}
          {isScrolling && !scrollingLogo ? <Brand src={Logo} /> : null}
          {!isScrolling && !transparentHeader ? <Brand src={Logo} /> : null}
        </HomeLink>
      </BrandContainer>
      {activeScreen === 'right' ? (
        <div />
      ) : (
        <CartWrapper>
          <CartIcon
            size={24}
            onClick={() => setScreen('right')}
            color={isScrolling || !transparentHeader ? 'black' : transparentColor || 'white'}
          />
          {count ? <CartCount>{count}</CartCount> : null}
        </CartWrapper>
      )}
    </Wrapper>
  );
};

export default Navigation;
