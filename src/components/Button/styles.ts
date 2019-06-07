import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { button } from '../tokens';

export interface ButtonProps {
  appearance: string;
  fullWidth: boolean;
  as: React.ReactNode;
}

export const Button = styled('button', { shouldForwardProp: isPropValid })<ButtonProps>`
  position: relative;
  appearance: none;
  background: transparent;
  // @ts-ignore
  border: ${({ appearance }) => button[appearance].border || 'none'};
  text-decoration: none;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'unset')};
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
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;
