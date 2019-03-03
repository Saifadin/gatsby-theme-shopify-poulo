import styled from '@emotion/styled';

import { layout, colors } from '../../components/tokens';

export const Product = styled.div``;

export const ProductHeader = styled.section`
  min-height: 50vh;
  padding: ${layout.spacing * 4}px;
  background: #eee;
  @media (min-width: 600px) {
    padding: ${layout.spacing * 8}px ${layout.spacing * 5}px;
  }
`;

export const ProductHeaderContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${layout.spacing * 2}px;
  @media (min-width: 600px) {
    grid-gap: ${layout.spacing * 3}px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProductDescription = styled.section`
  max-width: 512px;
  width: 100%;
  margin: 0 auto;
  padding: ${layout.spacing * 2}px;
  @media (min-width: 600px) {
    padding: ${layout.spacing * 8}px ${layout.spacing * 5}px;
  }
`;

/**
 * ProductDetails
 */
export const DetailsWrapper = styled.div`
  text-align: center;
  z-index: 0;
  position: relative;
  @media (min-width: 600px) {
    padding: ${layout.spacing * 4}px;
    text-align: left;
  }
`;
export const ProductTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.25;
  font-weight: 900;
  margin: 0;
  margin-bottom: ${layout.spacing * 4}px;
  @media (min-width: 600px) {
    font-size: 2em;
  }
`;
export const ProductPrice = styled.div`
  font-size: 1rem;
  font-weight: 300;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: ${layout.spacing * 4}px;
`;
export const ProductOptions = styled.div`
  margin-bottom: ${layout.spacing * 4}px;
`;
export const ProductName = styled.h3`
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin: 0;
  text-transform: uppercase;
`;
export const ProductValues = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ProductValue = styled.div`
  min-width: 34px;
  text-align: center;
  border: 1px solid #222;
  border-radius: 17px;
  padding: ${layout.spacing}px ${layout.spacing * 2}px;
  margin-right: ${layout.spacing}px;
  background-color: ${({ active }) => (active ? colors.primaryColor : 'rgba(255, 255, 255, 0.5)')};
  color: ${({ active }) => (active ? colors.colorOnPrimary : colors.color)};
  overflow: hidden;
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
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin: 0;
  text-transform: uppercase;
`;
export const ProductQuantitySelect = styled.select``;

export const AddToCart = styled.button`
  position: relative;
  appearance: none;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 5px;
  padding: ${layout.spacing}px ${layout.spacing * 4}px;
  font-size: 0.8rem;
  line-height: 24px;
  text-transform: uppercase;
  background-color: ${colors.primaryColor};
  color: ${colors.colorOnPrimary};
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: ${layout.spacing}px;
  z-index: 1;
  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
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
  grid-template-rows: 1fr 80px;
  grid-gap: ${layout.spacing * 2}px;
  height: 350px;
  padding: 0 ${layout.spacing * 4}px;
  @media (min-height: 700px) {
    height: 500px;
  }
`;
export const ActiveImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ActiveImage = styled.img`
  object-fit: contain;
  margin: 0;
`;
export const AllImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: scroll;
`;
export const Thumbnail = styled.img`
  height: 80px;
  width: 80px;
  object-fit: contain;
  margin: 0 ${layout.spacing * 2}px;
  cursor: pointer;
  border-bottom: 1px solid;
  border-color: ${({ active }) => (active ? '#000' : 'transparent')};
  &:hover {
    border-bottom: 1px solid #000;
  }
`;
export const ImageSliderArrow = styled.div``;
