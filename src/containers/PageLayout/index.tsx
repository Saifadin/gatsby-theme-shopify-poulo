import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Navigation from '../../components/Navigation';
import MobileNavigation from '../../components/MobileNavigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import LayoutContext, { LayoutProvider } from '../../context/LayoutContext';
import { ShopifyProvider } from '../../context/ShopifyContext';
import { Wrapper, Main, Content, Overlay, Header } from './styles';

import '../../index.css';
import './index.css';

interface PageLayoutProps {
  transparentHeader?: boolean;
  transparentColor?: string;
  transparentLogo?: string;
  scrollingLogo?: string;
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({
  children,
  transparentHeader,
  transparentLogo,
  scrollingLogo,
  transparentColor,
}) => {
  const { activeScreen, setScreen } = useContext(LayoutContext);

  return (
    <Wrapper active={activeScreen}>
      <Overlay active={activeScreen} onClick={() => setScreen('main')} />
      <MobileNavigation />
      <Main active={activeScreen}>
        <Header transparentHeader={transparentHeader}>
          <Navigation
            transparentHeader={transparentHeader}
            scrollingLogo={scrollingLogo}
            transparentLogo={transparentLogo}
            transparentColor={transparentColor}
          />
        </Header>
        <Content id="main-content">
          {children}
          <Footer />
        </Content>
      </Main>
      <Cart />
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
