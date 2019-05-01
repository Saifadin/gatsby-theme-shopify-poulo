import styled from '@emotion/styled';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';

import { layout, colors, typo } from '../../components/tokens';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
export const Label = styled.label`
  display: block;
  font-size: ${typo.small};
  line-height: ${typo.lineRegular};
  font-weight: 600;
  margin: 0;
  margin-bottom: ${layout.spacing * 1.5}px;
  text-transform: uppercase;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

interface InputProps {
  isLight?: boolean;
}

export const Input = styled.input<InputProps>`
  border: 2px solid ${({ isLight }) => (isLight ? '#DEDEDE' : colors.primaryColor)};
  text-align: center;
  font-size: ${typo.small};
  line-height: 36px;
  font-weight: 600;
  letter-spacing: 0.5px;
  max-width: 100px;
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 6px;
  z-index: 5;
  height: 30px;
  cursor: pointer;
`;
export const IconWrapperMinus = styled(IconWrapper)`
  left: 4px;
`;
export const IconWrapperPlus = styled(IconWrapper)`
  right: 4px;
`;

export const MinusIcon = styled(IoIosRemove)``;
export const PlusIcon = styled(IoIosAdd)``;
