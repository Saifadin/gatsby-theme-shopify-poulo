import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { MobileNav, MenuItem } from './styles';

const MobileNavigation: React.FC = () => {
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
    <MobileNav>
      {menu.map(({ displayName, link, subMenu = [] }: any) => {
        return (
          <MenuItem key={link} to={link}>
            {displayName}
          </MenuItem>
        );
      })}
    </MobileNav>
  );
};

export default MobileNavigation;
