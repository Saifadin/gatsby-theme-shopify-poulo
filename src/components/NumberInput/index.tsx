import React, { useState, useEffect } from 'react';
import { Wrapper, Label, InputWrapper, Input, IconWrapperMinus, IconWrapperPlus, MinusIcon, PlusIcon } from './styles';

interface InputProps {
  label?: React.ReactNode;
  className?: string;
  id?: string;
  name: string;
  min?: number;
  max?: number;
  value: number;
  isLight?: boolean;
  onChange(value: number): void;
}

const NumberInput: React.FC<InputProps> = ({ className, label, id, name, min, max, onChange, value, isLight = false }) => {
  const [internalValue, setValue] = useState(value || 1);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const handlePlusChange = () => {
    const newValue = internalValue + 1 === 11 ? internalValue : internalValue + 1;

    setValue(newValue);
    onChange(newValue);
  };

  const handleMinusChange = () => {
    const newValue = internalValue - 1 === 0 ? internalValue : internalValue - 1;

    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Wrapper className={className}>
      {label ? <Label htmlFor={id || name}>{label}</Label> : null}
      <InputWrapper>
        <IconWrapperMinus onClick={handleMinusChange}>
          <MinusIcon size={30} />
        </IconWrapperMinus>
        <Input id={id || name} name={name} type="number" min={min} max={max} value={internalValue} onChange={handleChange} isLight={isLight} />
        <IconWrapperPlus onClick={handlePlusChange}>
          <PlusIcon size={30} />
        </IconWrapperPlus>
      </InputWrapper>
    </Wrapper>
  );
};

export default NumberInput;
