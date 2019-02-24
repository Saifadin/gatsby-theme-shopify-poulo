import styled from '@emotion/styled';

type WrapperProps = {
  height: number | string;
  fullWidth?: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${({ fullWidth }: WrapperProps) => {
    if (!fullWidth)
      return `
      max-width: 1200px;
      margin: 0 auto;
    `;
  }};
  height: ${({ height }: WrapperProps) => height};
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;
export const Title = styled.h2`
  margin: 0;
`;
export const SubTitle = styled.h3`
  margin: 0;
`;
