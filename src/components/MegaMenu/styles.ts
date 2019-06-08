import styled from '@emotion/styled';

interface WrapperProps {
  showMegaMenu?: boolean;
  left: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ showMegaMenu }) => (showMegaMenu ? 'block' : 'none')};
  position: fixed;
  background-color: white;
  top: 71px;
  left: 48px;
  color: black;
  border: 1px solid #ddd;
  border-top: none;
  transition: left 0.3s ease-in-out;
  height: min-content;
`;
