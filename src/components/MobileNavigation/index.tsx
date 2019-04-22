import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LayoutContext from '../../context/LayoutContext';
import { MobileNav, CloseIcon, MenuItem } from './styles';

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
  const { setScreen } = useContext(LayoutContext);

  const {
    siteMetadata: {
      navigation: { menu },
    },
  } = site;

  return (
    <MobileNav>
      <CloseIcon size={48} onClick={() => setScreen('main')} />
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
