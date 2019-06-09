import styled from '@emotion/styled';

import { layout } from '../tokens';

interface TypoProps {
  marginMultiplier?: number;
  color?: string;
}

export const PrimaryTitle = styled.span<TypoProps>`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: block;
  font-size: 30px;
  line-height: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: ${({ marginMultiplier }) => (marginMultiplier ? layout.spacing * marginMultiplier : 0)}px;
  color: ${({ color }) => color};
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;
export const SecondaryTitle = styled.span<TypoProps>`
  display: block;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  margin-bottom: ${({ marginMultiplier }) => (marginMultiplier ? layout.spacing * marginMultiplier : 0)}px;
  color: ${({ color }) => color};
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 48px;
  }
`;
export const SubTitle = styled.span<TypoProps>`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: ${({ marginMultiplier }) => (marginMultiplier ? layout.spacing * marginMultiplier : 0)}px;
  color: ${({ color }) => color};
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`;
export const Paragraph = styled.span<TypoProps>`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 24px;
  margin-bottom: ${({ marginMultiplier }) => (marginMultiplier ? layout.spacing * marginMultiplier : 0)}px;
  color: ${({ color }) => color};
`;
