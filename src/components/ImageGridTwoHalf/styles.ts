import styled from '@emotion/styled';

interface WrapperProps {
  gap?: string;
  rowHeight?: number;
  className?: string;
  children: React.ReactNode;
  fullWidth: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ gap }: any) => gap || ''};
  grid-auto-rows: ${({ rowHeight }: any) => (rowHeight ? `${rowHeight}px` : '50vh')};
  ${({ fullWidth }) => {
    if (!fullWidth) {
      return `
        max-width: 1200px;
        margin: 0 auto;
      `;
    }
    return '';
  }};
  width: 100%;
  @media (min-width: 768px) {
    grid-auto-rows: ${({ rowHeight }: any) => rowHeight || 300}px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
