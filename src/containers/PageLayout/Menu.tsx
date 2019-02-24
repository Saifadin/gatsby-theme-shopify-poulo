import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { MenuWrapper, NavItem } from './styles';

const Menu: React.FunctionComponent = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navigation {
            navStyle
            menu {
              link
              displayName
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
    <MenuWrapper>
      {menu.map(({ displayName, link }: any) => {
        return <NavItem key={link}>{displayName}</NavItem>;
      })}
    </MenuWrapper>
  );
};

export default Menu;
