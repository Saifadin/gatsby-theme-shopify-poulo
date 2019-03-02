import styled from '@emotion/styled';

import { layout, colors } from '../../components/tokens';

export const FooterBackdrop = styled.div`
  width: 100%;
  padding: ${layout.spacing * 4}px 0;
  background-color: ${colors.secondaryFooterBackground};
  color: ${colors.footerColor};
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${layout.spacing * 4}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${layout.spacing * 4}px;
  align-items: center;
`;

export const DisclaimerPayment = styled.div``;
export const PaymentMethods = styled.div`
  display: flex;
  margin-bottom: ${layout.spacing}px;
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const SocialIcon = styled.a`
  height: 32px;
  padding-left: ${layout.spacing * 2}px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease;
  &:hover {
    color: ${colors.footerColor};
  }
`;
