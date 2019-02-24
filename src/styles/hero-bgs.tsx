import React from 'react';
import styled from '@emotion/styled';

// @ts-ignore
import PromotionBG from '../images/Promotion-BG.jpg';

const PromotionWrapper = styled.div`
  background-color: #1f4940;
  height: 100%;
  width: 100%;
`;
const PromotionImage = styled.img`
  mix-blend-mode: multiply;
  filter: grayscale(100%);
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Promotion = () => {
  return (
    <PromotionWrapper>
      <PromotionImage src={PromotionBG} />
    </PromotionWrapper>
  );
};
