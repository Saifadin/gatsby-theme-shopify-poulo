import styled from '@emotion/styled';

import { layout } from '../tokens';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${layout.spacing * 4}px;
  width: 100%;
  justify-content: center;
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
