import styled from '@emotion/styled';
import { layout } from '../tokens';

export const SectionWrapper = styled.section`
  display: block;
  width: 100%;
  max-width: 100vw;
  padding: ${layout.spacing * 7}px 0;
  text-align: center;
`;

interface ContentProps {
  fullWidth?: boolean;
}

export const SectionContent = styled.div<ContentProps>`
  display: block;
  width: 100%;
  ${({ fullWidth }) => {
    if (!fullWidth) {
      return `
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 ${layout.spacing * 2}px;
        @media (min-width: 600px) {
          padding: 0 ${layout.spacing * 6}px;
        }
      `;
    }
    return '';
  }};
`;

interface DescriptionProps {
  noMargin?: boolean;
  noDescription?: boolean;
}

export const SectionTitle = styled.h2<DescriptionProps>`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 40px;
  line-height: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: ${({ noDescription, noMargin }) => (noMargin ? 0 : noDescription ? layout.spacing * 8 : layout.spacing)}px;
`;

export const SectionSubTitle = styled.h3<DescriptionProps>`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: ${({ noMargin }) => (noMargin ? 0 : layout.spacing * 8)}px;
`;

export const SectionDescription = styled.p<DescriptionProps>`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: ${({ noMargin }) => (noMargin ? 0 : layout.spacing * 8)}px;
`;
