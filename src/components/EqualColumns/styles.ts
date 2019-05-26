import styled from '@emotion/styled';

import { layout } from '../../components/tokens';

interface WrapperProps {
  background?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${({ background }) => background};
  width: 100%;
  padding: ${layout.spacing * 4}px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: ${layout.spacing * 7}px;
  }
`;

export const Column = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${layout.spacing * 5}px;
  max-width: 250px;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ColumnContent = styled.div`
  margin-bottom: ${layout.spacing * 3}px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`;
