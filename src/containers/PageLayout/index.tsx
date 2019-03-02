import React, { useContext } from 'react';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import LayoutContext, { LayoutProvider } from '../../context/LayoutContext';
import Menu from './Menu';
import { Wrapper, Main, Content, Overlay, RightCloseIcon, LeftCloseIcon } from './styles';

import './index.css';

const PageLayout: React.FunctionComponent = ({ children }) => {
  const { activeScreen, setScreen } = useContext(LayoutContext);

  return (
    <Wrapper active={activeScreen}>
      {activeScreen === 'left' ? <LeftCloseIcon size={40} onClick={() => setScreen('main')} /> : null}
      <Overlay active={activeScreen} onClick={() => setScreen('main')} />
      <Menu />
      <Main active={activeScreen}>
        <Navigation />
        <Content>
          {children}
          <Footer />
        </Content>
      </Main>
      <div>Cart</div>
      {activeScreen === 'right' ? <RightCloseIcon size={40} onClick={() => setScreen('main')} /> : null}
    </Wrapper>
  );
};

const ConnectedLayout: React.FunctionComponent = props => {
  return (
    <LayoutProvider>
      <PageLayout {...props} />
    </LayoutProvider>
  );
};

export default ConnectedLayout;
