import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { colors, layout } from './src/components/tokens';
import PageLayout from './src/containers/PageLayout';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={{ colors, layout }}>{element}</ThemeProvider>;
};

export const wrapPageElement = ({ element }) => {
  return <PageLayout>{element}</PageLayout>;
};
