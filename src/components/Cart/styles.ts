import styled from '@emotion/styled';
import { IoIosClose } from 'react-icons/io';

import { layout } from '../../components/tokens';

const sidebarDesktopWidth = 490;

interface WrapperProps {
  active: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: ${layout.spacing * 2}px;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: ${({ active }) => (active ? 0 : '-100vw')};
  z-index: 111;
  background: white;
  transition: right 0.33s ease;
  @media (min-width: 490px) {
    width: ${sidebarDesktopWidth}px;
    right: ${({ active }) => (active ? 0 : -sidebarDesktopWidth)}px;
  }
  @media (min-width: 600px) {
    padding: ${layout.spacing * 6}px;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-rows: auto 1fr auto auto;
  }
`;

export const CloseIcon = styled(IoIosClose)`
  position: absolute;
  cursor: pointer;
  top: ${layout.spacing * 1.5}px;
  z-index: 10;
  color: #000;
  @media (min-width: 600px) {
    top: ${layout.spacing * 3}px;
    left: ${layout.spacing * 3}px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 40px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: ${layout.spacing * 4}px;
  text-align: right;
`;
export const LineItems = styled.div`
  margin-bottom: ${layout.spacing * 2}px;
  @media (min-width: 1024px) {
    overflow: scroll;
  }
`;
export const LineItem = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  grid-column-gap: ${layout.spacing * 4}px;
  border-bottom: solid 1px #929293;
  margin-bottom: ${layout.spacing * 2.5}px;
`;
export const ItemImageWrapper = styled.div`
  margin-bottom: ${layout.spacing * 2.5}px;
  height: 115px;
`;
export const ItemImage = styled.img`
  object-fit: cover;
  object-position: center center;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${layout.spacing * 2.5}px;
`;

export const ItemTitleRemove = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const ItemTitle = styled.h3`
  margin: 0;
  margin-right: ${layout.spacing}px;
  font-size: 20px;
  line-height: 1;
  font-weight: 600;
`;
export const ItemRemove = styled.div`
  cursor: pointer;
  text-align: right;
  align-self: flex-start;
  height: 24px;
  opacity: 0.5;
  &:hover {
    color: red;
    opacity: 1;
  }
`;

export const ItemVariant = styled.h4`
  font-weight: 300;
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.33;
`;

export const ItemQuantityPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;
export const ItemPrice = styled.div`
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  text-align: right;
  align-self: flex-end;
`;

export const CheckoutTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${layout.spacing * 3}px;
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
`;
export const CheckoutTotalTitle = styled.span``;
export const CheckoutPrice = styled.span``;
export const CheckoutDisclaimer = styled.span`
  font-size: 0.75rem;
  line-height: 16px;
  font-weight: 300;
  margin-bottom: ${layout.spacing}px;
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  padding-top: ${layout.spacing * 10}px;
`;
export const EmptyImage = styled.img`
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  margin-bottom: ${layout.spacing * 4}px;
`;
export const EmptyText = styled.div`
  font-size: 0.75rem;
  line-height: 16px;
  font-weight: 300;
`;
