// Packages
import { forwardRef, useState } from 'react';

// Styles
import { Container, Label, ErrorMessage } from './styles';

export const Input = forwardRef(({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  labelText = '',
  name,
  error,
  ...rest
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <>
      {!!labelText && <Label htmlFor={name}>{labelText}</Label>}

      <Container
        isErrored={!!error}
        isFocused={isFocused}
      >
        {LeftIcon && <LeftIcon />}

        <input
          autoComplete="off"
          onBlur={handleBlur}
          onFocus={handleFocus}
          ref={ref}
          name={name}
          id={name}
          {...rest}
        />

        {RightIcon && <RightIcon />}
      </Container>

      {!!error && (
        <ErrorMessage>
          {error.message}
        </ErrorMessage>
      )}
    </>
  );
})
