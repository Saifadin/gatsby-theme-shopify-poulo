import styled from '@emotion/styled';

import { layout } from '../tokens';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${layout.spacing * 2}px;
  overflow-y: scroll;
  width: 100%;
  max-width: 100vw;
  @media (min-width: 1200px) {
    grid-gap: ${layout.spacing * 4}px;
  }
`;
