// Components
import { Loader } from '../Loader';

// Styles
import { ButtonContainer } from './styles';

export function Button({ loading = false, children, ...rest }) {
  return (
    <ButtonContainer {...rest}>
      {loading ? <Loader /> : children}
    </ButtonContainer>
  );
}