import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext } from 'react';

import { MenuWrapper, PrimaryNavItem, MenuItem, PrimaryNavItemLink, SubMenu, SecondaryNavItem } from './styles';

const Menu: React.FunctionComponent = () => {
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
    <MenuWrapper>
      {menu.map(({ displayName, link, subMenu = [] }: any) => {
        return (
          <MenuItem key={link}>
            {link ? <PrimaryNavItemLink to={link}>{displayName}</PrimaryNavItemLink> : <PrimaryNavItem>{displayName}</PrimaryNavItem>}
            {subMenu.length > 0 ? (
              <SubMenu>
                {subMenu.map(({ displayName: dN2, link: l2 }: any) => (
                  <SecondaryNavItem key={l2} to={l2}>
                    {dN2}
                  </SecondaryNavItem>
                ))}
              </SubMenu>
            ) : null}
          </MenuItem>
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
