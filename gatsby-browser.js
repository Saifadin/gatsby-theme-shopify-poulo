import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { colors, layout } from './src/components/tokens';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={{ colors, layout }}>{element}</ThemeProvider>;
};
