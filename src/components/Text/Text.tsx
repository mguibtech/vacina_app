import {Props} from './types';
import {Container} from './styles';

export function Text({children, color, typography, ...rest}: Props) {
  return (
    <Container
      color={color || 'surface'}
      typography={typography || 'body1'}
      {...rest}>
      {children}
    </Container>
  );
}
