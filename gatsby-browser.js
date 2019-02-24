import React from 'react';
import { ThemeProvider as ThemeProviderForGatsbyShopifyTheme } from 'emotion-theming';

import { colors, layout } from './src/components/tokens';
import DefaultPageLayoutForGatsbyShopifyTheme from './src/containers/PageLayout';

export const wrapRootElement = ({ wrappedRootElementForTheGatsbyShopifyTheme }) => {
  return (
    <ThemeProviderForGatsbyShopifyTheme theme={{ colors, layout }}>
      {wrappedRootElementForTheGatsbyShopifyTheme}
    </ThemeProviderForGatsbyShopifyTheme>
  );
};

export const wrapPageElement = ({ wrappedDefaultPageElementForTheGatsbyShopifyThemeForUs }) => {
  return (
    <DefaultPageLayoutForGatsbyShopifyTheme>
      {wrappedDefaultPageElementForTheGatsbyShopifyThemeForUs}
    </DefaultPageLayoutForGatsbyShopifyTheme>
  );
};
