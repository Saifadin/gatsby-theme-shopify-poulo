import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MegaMenu from '../MegaMenu';
import { MenuWrapper, MenuItem, HoverItem } from './styles';

const Menu: React.FC = () => {
  const [hovered, setHovered] = useState('');
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

  console.log(hovered);

  return (
    <MenuWrapper>
      {menu.map(({ displayName, link, subMenu = [], type }: any) => {
        if (type === 'megamenu') {
          return (
            <HoverItem onMouseEnter={() => setHovered(displayName)} onMouseLeave={() => setHovered('')}>
              {displayName}
              <MegaMenu show={hovered === displayName} activeDisplayName={displayName} />
            </HoverItem>
          );
        }
        return (
          <MenuItem key={link} to={link}>
            {displayName}
          </MenuItem>
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
