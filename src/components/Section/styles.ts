import styled from '@emotion/styled';
import { layout } from '../tokens';

interface ContentProps {
  fullWidth?: boolean;
}

export const SectionWrapper = styled.section`
  display: block;
  width: 100%;
  padding: ${layout.spacing * 7}px 0;
  text-align: center;
`;

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
          padding: 0 ${layout.spacing * 4}px;
        }
      `;
    }
    return '';
  }};
`;

export const SectionTitle = styled.h2`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 40px;
  line-height: 48px;
  font-weight: 600;
  margin-bottom: ${({ noDescription }: any) => (noDescription ? layout.spacing * 8 : layout.spacing)}px;
`;

export const SectionSubTitle = styled.h3`
  margin: 0;
  font-size: 30px;
  line-height: 48px;
  font-weight: 300;
  margin-bottom: ${layout.spacing * 8}px;
`;

export const SectionDescription = styled.p`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: ${layout.spacing * 8}px;
`;
