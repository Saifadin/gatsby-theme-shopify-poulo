import styled from '@emotion/styled';
import { button } from '../tokens';

export interface ButtonProps {
  appearance: string;
}

export const Button = styled.button<ButtonProps>`
  display: block;
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  // @ts-ignore
  background: ${({ appearance }) => button[appearance].background};
  // @ts-ignore
  border-radius: ${({ appearance }) => button[appearance].borderRadius};
  // @ts-ignore
  box-shadow: ${({ appearance }) => button[appearance].boxShadow};
  // @ts-ignore
  color: ${({ appearance }) => button[appearance].color};
  // @ts-ignore
  font-size: ${({ appearance }) => button[appearance].fontSize};
  // @ts-ignore
  font-weight: ${({ appearance }) => button[appearance].fontWeight};
  // @ts-ignore
  letter-spacing: ${({ appearance }) => button[appearance].letterSpacing};
  // @ts-ignore
  line-height: ${({ appearance }) => button[appearance].lineHeight};
  // @ts-ignore
  padding: ${({ appearance }) => button[appearance].padding};
  // @ts-ignore
  text-transform: ${({ appearance }) => button[appearance].textTransform};
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;
