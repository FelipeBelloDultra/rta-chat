// Styles
import { Container, Label, ErrorMessage } from './styles';

export function Input({
  icon: Icon,
  labelText = '',
  name,
  error,
  ...rest
}) {
  return (
    <>
      {!!labelText && <Label htmlFor={name}>{labelText}</Label>}

      <Container isErrored={!!error} >
        {Icon && <Icon />}

        <input
          name={name}
          id={name}
          {...rest}
        />
      </Container>

      {!!error && (
          <ErrorMessage>
            {error.message}
          </ErrorMessage>
        )}
    </>
  );
}
