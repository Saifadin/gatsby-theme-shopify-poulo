import styled from '@emotion/styled';

import { layout, colors } from '../../components/tokens';

export const FooterBackdrop = styled.div`
  width: 100vw;
  padding: ${layout.spacing * 4}px 0;
  background-color: ${colors.secondaryFooterBackground};
  color: ${colors.footerColor};
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${layout.spacing * 2}px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${layout.spacing * 4}px;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (min-width: 600px) {
    padding: 0 ${layout.spacing * 4}px;
    text-align: left;
    grid-template-columns: 1fr 1fr;
  }
`;

export const DisclaimerPayment = styled.div`
  order: 2;
  @media (min-width: 600px) {
    order: 1;
  }
`;
export const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${layout.spacing * 2}px;
  flex-wrap: wrap;
  @media (min-width: 600px) {
    justify-content: flex-start;
    margin-bottom: ${layout.spacing}px;
  }
  > * {
    padding-right: ${layout.spacing * 0.5}px;
  }
`;
export const Disclaimer = styled.div`
  font-size: 12px;
  line-height: 16px;
  a {
    color: ${colors.footerColor};
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const SocialIcons = styled.div`
  order: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) {
    order: 2;
    justify-content: flex-end;
  }
`;
export const SocialIcon = styled.a`
  height: 32px;
  padding: 0 ${layout.spacing}px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease;
  &:hover {
    color: ${colors.footerColor};
  }
`;
