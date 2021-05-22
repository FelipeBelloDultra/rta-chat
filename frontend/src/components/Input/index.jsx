// Styles
import { Container, Label, ErrorMessage } from './styles';

export function Input({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  labelText = '',
  name,
  error,
  ...rest
}) {
  return (
    <>
      {!!labelText && <Label htmlFor={name}>{labelText}</Label>}

      <Container isErrored={!!error} >
        {LeftIcon && <LeftIcon />}

        <input
          autoComplete="off"
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
}
