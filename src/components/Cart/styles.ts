import styled from '@emotion/styled';

import { layout, colors } from '../../components/tokens';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  height: 100%;
  padding: ${layout.spacing * 2}px;
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: ${layout.spacing * 4}px;
`;
export const LineItems = styled.div`
  margin-bottom: ${layout.spacing * 2}px;
`;
export const LineItem = styled.div`
  display: grid;
  grid-template-areas: 'title quantity remove' 'variant price remove';
  grid-template-columns: 1fr auto 24px;
  grid-column-gap: ${layout.spacing}px;
  align-items: center;
  margin-bottom: ${layout.spacing * 6}px;
`;
export const ItemTitle = styled.h3`
  grid-area: title;
  margin: 0;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.33;
`;
export const ItemVariant = styled.h4`
  grid-area: variant;
  font-weight: 300;
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.33;
`;
export const ItemQuantity = styled.div`
  grid-area: quantity;
  text-align: right;
  align-self: flex-end;
  line-height: 16px;
`;
export const ItemPrice = styled.div`
  grid-area: price;
  font-size: 0.75rem;
  font-weight: 300;
  font-family: 'Roboto Mono', monospace;
  text-align: right;
  align-self: flex-end;
  line-height: 16px;
`;
export const ItemRemove = styled.div`
  cursor: pointer;
  grid-area: remove;
  height: 24px;
  opacity: 0.5;
  &:hover {
    color: red;
    opacity: 1;
  }
`;
export const CheckoutPrice = styled.div`
  font-size: 1rem;
  font-weight: 300;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: ${layout.spacing}px;
  text-align: right;
`;
export const CheckoutDisclaimer = styled.span`
  font-size: 0.75rem;
  line-height: 16px;
  font-weight: 300;
  margin-bottom: ${layout.spacing}px;
`;
export const CheckoutButton = styled.button`
  cursor: pointer;
  background-color: ${colors.primaryColor};
  color: ${colors.colorOnPrimary};
  border: 0;
  border-radius: 5px;
  padding: ${layout.spacing}px ${layout.spacing * 2}px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const EmptyImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: ${layout.spacing * 4}px;
`;
export const EmptyText = styled.div`
  font-size: 0.75rem;
  line-height: 16px;
  font-weight: 300;
`;
