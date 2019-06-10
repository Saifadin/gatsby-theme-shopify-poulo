import React, { useState, Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MegaMenu from '../MegaMenu';
import { MenuWrapper, MenuItem, HoverMenuItem, HoverItem } from './styles';

const Menu: React.FC = () => {
  const [hovered, setHovered] = useState('');
  const [left, setLeft] = useState(0);
  const { siteNavigation } = useStaticQuery(graphql`
    query {
      siteNavigation {
        link
        type
        displayName
      }
    }
  `);

  const handleHover = (event: any, displayName: string) => {
    const rect = event.target.getBoundingClientRect();
    setHovered(displayName);
    setLeft(rect.left);
  };

  return (
    <MenuWrapper>
      {siteNavigation.map(({ displayName, link, type }: any) => {
        if (type === 'megamenu' && !link) {
          return (
            <Fragment key={displayName}>
              <HoverItem onMouseEnter={event => handleHover(event, displayName)} onMouseLeave={() => setHovered('')}>
                {displayName}
              </HoverItem>
              <MegaMenu
                show={hovered === displayName}
                left={left}
                activeDisplayName={hovered}
                onMouseEnter={() => setHovered(displayName)}
                onMouseLeave={() => setHovered('')}
              />
            </Fragment>
          );
        }
        if (type === 'megamenu' && link) {
          return (
            <Fragment key={displayName}>
              <HoverMenuItem to={link} onMouseEnter={event => handleHover(event, displayName)} onMouseLeave={() => setHovered('')}>
                {displayName}
              </HoverMenuItem>
              <MegaMenu
                show={hovered === displayName}
                left={left}
                activeDisplayName={hovered}
                onMouseEnter={() => setHovered(displayName)}
                onMouseLeave={() => setHovered('')}
              />
            </Fragment>
          );
        }
        return (
          <MenuItem key={displayName} to={link}>
            {displayName}
          </MenuItem>
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
