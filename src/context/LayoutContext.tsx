import React, { createContext, useState } from 'react';

type LayoutContextType = {
  activeScreen: 'main' | 'left' | 'right';
  setScreen?: any;
};

export const defaultLayout: LayoutContextType = {
  activeScreen: 'main',
};

const LayoutContext = createContext(defaultLayout);

export const LayoutProvider: React.FunctionComponent = ({ children }) => {
  const [activeScreen, setActiveScreen] = useState(defaultLayout.activeScreen);

  return <LayoutContext.Provider value={{ activeScreen, setScreen: setActiveScreen }}>{children}</LayoutContext.Provider>;
};

export default LayoutContext;
