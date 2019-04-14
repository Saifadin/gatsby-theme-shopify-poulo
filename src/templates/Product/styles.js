import styled from '@emotion/styled';

import { layout, colors } from '../../components/tokens';

export const Product = styled.div``;

export const ProductHeader = styled.section`
  padding: 0;
  @media (min-width: 768px) {
    padding: ${layout.spacing * 8}px ${layout.spacing * 5}px;
  }
`;

export const ProductHeaderContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${layout.spacing * 2}px;
  @media (min-width: 768px) {
    grid-gap: ${layout.spacing * 6}px;
    grid-template-columns: 1fr 250px;
  }
  @media (min-width: 1024px) {
    grid-gap: ${layout.spacing * 10}px;
    grid-template-columns: 1fr 360px;
  }
`;

/**
 * ProductDetails
 */
export const DetailsWrapper = styled.div`
  text-align: center;
  z-index: 0;
  position: relative;
  padding: ${layout.spacing * 2}px;
  @media (min-width: 768px) {
    padding: 0;
    text-align: left;
  }
`;
export const ProductTitle = styled.h1`
  font-size: 30px;
  line-height: 48px;
  letter-spacing: 0.9px;
  font-weight: 900;
  margin: 0;
  margin-bottom: ${layout.spacing * 1.5}px;
  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export const ProductDescription = styled.div`
  font-size: 15px;
  line-height: 20px;
  max-width: 512px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${layout.spacing * 3}px;
`;

export const ProductPrice = styled.div`
  font-size: 15px;
  letter-spacing: 0.5px;
  margin-bottom: ${layout.spacing * 3}px;
`;
export const ProductOptions = styled.div`
  margin-bottom: ${layout.spacing * 2}px;
`;
export const ProductName = styled.h3`
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: ${layout.spacing * 1.5}px;
`;
export const ProductValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const ProductValue = styled.div`
  min-width: 42px;
  text-align: center;
  border: 2px solid ${colors.primaryColor};
  padding: ${layout.spacing * 1.5}px;
  margin-right: ${layout.spacing}px;
  margin-bottom: ${layout.spacing}px;
  background-color: ${({ active }) => (active ? colors.primaryColor : 'transparent')};
  color: ${({ active }) => (active ? colors.colorOnPrimary : colors.color)};
  overflow: hidden;
  font-size: 15px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.8)};
  &:hover {
    opacity: 1;
  }
`;

export const ProductQuantity = styled.div`
  margin-bottom: ${layout.spacing * 4}px;
`;
export const ProductQuantityLabel = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  margin-bottom: ${layout.spacing * 1.5}px;
  text-transform: uppercase;
`;
export const ProductQuantityInput = styled.input`
  border: 2px solid ${colors.primaryColor};
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.5px;
  padding: 0 ${layout.spacing * 5}px;
`;

export const AddedMessage = styled.div`
  position: relative;
  font-size: 0.75rem;
  line-height: 16px;
  font-weight: 300;
  transition: all 0.3s ease;
  z-index: 0;
  ${({ added }) => (added ? 'transform: translateY(0); opacity: 1;' : 'transform: translateY(-32px); opacity: 0;')};
`;

/**
 * ProductImages
 */
export const ImageWrapper = styled.div`
  display: grid;
  grid-gap: ${layout.spacing * 3}px;
  width: 100vw;
  @media (min-width: 768px) {
    grid-template-columns: 64px 1fr;
    width: 100%;
  }
`;
export const ActiveImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const ActiveImage = styled.img`
  margin: 0;
  width: 100%;
`;
export const AllImages = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: scroll;
  }
`;
export const Thumbnail = styled.img`
  width: 100%;
  margin-bottom: ${layout.spacing * 2.5}px;
  cursor: pointer;
  border-bottom: 1px solid;
  border-color: ${({ active }) => (active ? '#000' : 'transparent')};
  &:hover {
    border-bottom: 1px solid #000;
  }
  &:first-of-type {
    margin-left: 0;
  }
`;
export const ImageSliderArrow = styled.div``;
