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

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 2em;
  line-height: 1.33;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: ${layout.spacing}px;
`;

export const SectionSubTitle = styled.h3`
  margin: 0;
  font-size: 1.25em;
  line-height: 1.33;
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: ${layout.spacing * 8}px;
`;

export const SectionDescription = styled.p`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  font-size: 1em;
  line-height: 1.25;
  margin-bottom: ${layout.spacing * 8}px;
`;
