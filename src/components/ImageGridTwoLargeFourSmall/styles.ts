import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 100vw);
  grid-gap: ${({ gap }: any) => gap || ''};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, ${({ rowHeight }: any) => rowHeight || 200}px);
    & .ImageGrid-LargeChild {
      &:nth-of-type(1) {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
      }
      &:nth-of-type(2) {
        grid-column: 3 / span 2;
        grid-row: 2 / span 2;
      }
    }
  }
`;

export const LargeChildWrapper = styled.div`
  background: ${({ background }: any) => background};
`;

export const SmallChildWrapper = styled.div`
  background: ${({ background }: any) => background};
  @media (max-width: 767px) {
    display: none;
  }
`;
