import styled from '@emotion/styled';

import { layout } from '../tokens/index';

interface WrapperProps {
  showMegaMenu?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ showMegaMenu }) => (showMegaMenu ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  color: black;
  border: 1px solid #ddd;
  border-top: none;
  padding: ${layout.spacing * 3}px;
`;
