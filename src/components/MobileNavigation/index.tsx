import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LayoutContext from '../../context/LayoutContext';
import { MobileNav, CloseIcon, MenuItem } from './styles';
import MobileMegaMenu from '../MobileMegaMenu';

const MobileNavigation: React.FC = () => {
  const { siteNavigation } = useStaticQuery(graphql`
    query {
      siteNavigation {
        link
        type
        displayName
        subMenu {
          link
          displayName
        }
      }
    }
  `);
  const { setScreen, activeScreen } = useContext(LayoutContext);

  return (
    <MobileNav active={activeScreen === 'left'}>
      <CloseIcon size={48} onClick={() => setScreen('main')} />
      {siteNavigation.map(({ displayName, link, type, subMenu = [] }: any) => {
        if (type === 'megamenu' && !link) {
          return <MobileMegaMenu key={displayName} displayName={displayName} />;
        }
        if (type === 'megamenu' && link) {
          return (
            <React.Fragment key={displayName}>
              <MenuItem to={link || '/'}>{displayName}</MenuItem>
              <MobileMegaMenu key={displayName} displayName={displayName} />
            </React.Fragment>
          );
        }
        return (
          <MenuItem key={link} to={link || '/'}>
            {displayName}
          </MenuItem>
        );
      })}
    </MobileNav>
  );
};

export default MobileNavigation;
