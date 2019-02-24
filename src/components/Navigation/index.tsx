import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LayoutContext from '../../context/LayoutContext';
import { Wrapper, BrandContainer, Brand, MenuIcon, CartIcon } from './styles';

const Navigation: React.FunctionComponent = () => {
  const { activeScreen, setScreen } = useContext(LayoutContext);
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
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
    },
  } = site;

  return (
    <Wrapper>
      {activeScreen === 'left' ? <div /> : <MenuIcon size={24} onClick={() => setScreen('left')} />}
      <BrandContainer>
        <Brand src={logo} />
      </BrandContainer>
      {activeScreen === 'right' ? <div /> : <CartIcon size={24} onClick={() => setScreen('right')} />}
    </Wrapper>
  );
};

export default Navigation;
