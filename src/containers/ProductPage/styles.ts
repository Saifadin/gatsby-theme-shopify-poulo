import styled from '@emotion/styled';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';

import { layout, colors, typo } from '../../components/tokens';

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
    grid-template-columns: 1fr 300px;
  }
  @media (min-width: 1024px) {
    grid-gap: ${layout.spacing * 10}px;
    grid-template-columns: 3fr 2fr;
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
  font-size: ${typo.large};
  line-height: 32px;
  letter-spacing: 0.9px;
  font-weight: 900;
  margin: 0;
  margin-bottom: ${layout.spacing * 1.5}px;
`;

export const ProductPrice = styled.div`
  font-size: ${typo.regular};
  font-weight: 600;
  letter-spacing: 0.6px;
  margin-bottom: ${layout.spacing * 1.5}px;
`;

export const ProductDescription = styled.div`
  font-size: ${typo.small};
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  max-width: 512px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${layout.spacing * 6}px;
`;

export const ProductOptions = styled.div`
  margin-bottom: ${layout.spacing * 2}px;
`;
export const ProductName = styled.h3`
  font-size: ${typo.small};
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: ${layout.spacing * 2}px;
`;
export const ProductValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

interface ValueProps {
  active: boolean;
  color?: string;
}

export const ProductValue = styled.div<ValueProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 42px;
  min-height: 42px;
  text-align: center;
  border: 2px solid ${colors.primaryColor};
  padding: 0 ${layout.spacing}px;
  margin-right: ${layout.spacing}px;
  margin-bottom: ${layout.spacing}px;
  background-color: ${({ active }) => (active ? colors.primaryColor : 'transparent')};
  color: ${({ active }) => (active ? colors.colorOnPrimary : colors.color)};
  overflow: hidden;
  font-size: ${typo.small};
  font-weight: 600;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.8)};
  &:hover {
    opacity: 1;
  }
`;

export const ProductColorValue = styled.div<ValueProps>`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 2px solid ${({ active }) => (active ? 'rgb(169, 169, 169)' : '#fafafa')};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: ${layout.spacing * 2}px;
  box-shadow: ${({ active }) => (active ? 'inset 0 0 0 2px white' : 'none')};
  opacity: ${({ active }) => (active ? 1 : 0.8)};
  &:hover {
    opacity: 1;
  }
`;

export const ProductQuantity = styled.div`
  margin-bottom: ${layout.spacing * 4}px;
  position: relative;
  display: inline-block;
`;
export const ProductQuantityLabel = styled.label`
  display: block;
  font-size: ${typo.small};
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  margin-bottom: ${layout.spacing * 1.5}px;
  text-transform: uppercase;
`;
export const ProductQuantityInput = styled.input`
  border: 2px solid ${colors.primaryColor};
  text-align: center;
  font-size: ${typo.small};
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.5px;
  padding: 0 ${layout.spacing * 5}px;
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  z-index: 5;
  height: 30px;
  cursor: pointer;
`;
export const IconWrapperMinus = styled(IconWrapper)`
  left: 6px;
`;
export const IconWrapperPlus = styled(IconWrapper)`
  right: 6px;
`;

export const ProductQuantityMinus = styled(IoIosRemove)``;
export const ProductQuantityPlus = styled(IoIosAdd)``;

interface AddedMessageProps {
  added: boolean;
}

export const AddedMessage = styled.div<AddedMessageProps>`
  position: relative;
  font-size: 0.75rem;
  line-height: 16px;
  font-weight: 300;
  transition: all 0.3s ease;
  text-align: center;
  z-index: ${({ added }) => (added ? '0' : '-1')};
  ${({ added }) => (added ? 'transform: translateY(10px); opacity: 1;' : 'transform: translateY(-50px); opacity: 0;')};
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

interface ThumbnailProps {
  active: boolean;
}

export const Thumbnail = styled.img<ThumbnailProps>`
  width: 100%;
  margin-bottom: ${layout.spacing * 2.5}px;
  cursor: pointer;
  border-bottom: 2px solid;
  border-color: ${({ active }) => (active ? '#000' : 'transparent')};
  &:hover {
    border-bottom: 2px solid #000;
  }
  &:first-of-type {
    margin-left: 0;
  }
`;
export const ImageSliderArrow = styled.div``;
