import styled from '@emotion/styled';
import { layout } from '../tokens';

type ContentProps = {
  fullWidth?: boolean;
};

export const SectionWrapper = styled.section`
  display: block;
  width: 100%;
  padding: ${layout.spacing * 16}px 0;
  text-align: center;
`;

export const SectionContent = styled.div`
  display: block;
  width: 100%;
  padding: 0 ${layout.spacing * 4}px;
  ${({ fullWidth }: ContentProps) => {
    if (fullWidth) {
      return `
        max-width: 1200px;
        margin: 0 auto
      `;
    }
    return '';
  }};
`;
