import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import LayoutContext, { LayoutProvider } from '../../context/LayoutContext';
import { ShopifyProvider } from '../../context/ShopifyContext';
import { Wrapper, Main, Content, Overlay, RightCloseIcon, Header } from './styles';

import './index.css';

interface PageLayoutProps {
  transparentHeader?: boolean;
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children, transparentHeader }) => {
  const { activeScreen, setScreen } = useContext(LayoutContext);

  return (
    <Wrapper active={activeScreen}>
      <Overlay active={activeScreen} onClick={() => setScreen('main')} />
      <div />
      <Main active={activeScreen}>
        <Header transparentHeader={transparentHeader}>
          <Navigation transparentHeader={transparentHeader} />
        </Header>
        <Content id="main-content">
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
        <PageLayout transparentHeader={true} {...props} />
      </LayoutProvider>
    </ShopifyProvider>
  );
};

export default ConnectedLayout;
