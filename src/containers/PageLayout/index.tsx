import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import Menu from '../../components/Menu';
import LayoutContext, { LayoutProvider } from '../../context/LayoutContext';
import { ShopifyProvider } from '../../context/ShopifyContext';
import { Wrapper, Main, Content, Overlay, RightCloseIcon, LeftCloseIcon } from './styles';

import './index.css';

const PageLayout: React.FunctionComponent = ({ children }) => {
  const { activeScreen, setScreen } = useContext(LayoutContext);

  return (
    <Wrapper active={activeScreen}>
      {activeScreen === 'left' ? <LeftCloseIcon size={40} onClick={() => setScreen('main')} /> : null}
      <Overlay active={activeScreen} onClick={() => setScreen('main')} />
      <Menu />
      <Main active={activeScreen}>
        <Navigation />
        <Content>
          <div>{children}</div>
          <Footer />
        </Content>
      </Main>
      <Cart />
      {activeScreen === 'right' ? <RightCloseIcon size={40} onClick={() => setScreen('main')} /> : null}
    </Wrapper>
  );
};

const ConnectedLayout: React.FunctionComponent = props => {
  const {
    site: {
      siteMetadata: { shopifyOptions },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          shopifyOptions {
            shopName
            accessToken
          }
        }
      }
    }
  `);

  return (
    <ShopifyProvider {...shopifyOptions}>
      <LayoutProvider>
        <PageLayout {...props} />
      </LayoutProvider>
    </ShopifyProvider>
  );
};

export default ConnectedLayout;
