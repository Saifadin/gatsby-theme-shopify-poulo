import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import path from 'path';

// @ts-ignore
import Logo from '../../images/logo.png';
import LayoutContext from '../../context/LayoutContext';
import ShopifyContext from '../../context/ShopifyContext';
import Menu from '../Menu';
import CartIcon from './CartIcon';
import MenuIcon from './MenuIcon';
import { Wrapper, BrandContainer, HomeLink, Brand } from './styles';

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
  countColor?: string;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
  transparentHeader,
  scrollingLogo,
  transparentLogo,
  transparentColor,
  countColor,
}) => {
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
              type
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
      <Menu />
      <BrandContainer>
        <HomeLink to="/">
          {!isScrolling && transparentHeader && transparentLogo ? <Brand src={transparentLogo} alt="logo" /> : null}
          {isScrolling && scrollingLogo ? <Brand src={scrollingLogo} alt="logo" /> : null}
          {isScrolling && !scrollingLogo ? <Brand src={Logo} alt="logo" /> : null}
          {!isScrolling && !transparentHeader ? <Brand src={Logo} alt="logo" /> : null}
        </HomeLink>
      </BrandContainer>
      <CartIcon
        size={32}
        onClick={() => setScreen('right')}
        count={count}
        color={isScrolling || !transparentHeader ? 'black' : transparentColor || 'white'}
        countColor={isScrolling || !transparentHeader ? countColor : transparentColor || 'white'}
      />
    </Wrapper>
  );
};

export default Navigation;
