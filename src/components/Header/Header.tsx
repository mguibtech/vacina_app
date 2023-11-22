import {Container, Name, Title} from './styles';
import { Prop } from './types';



export function Header({name, title} : Prop) {
  return (
    <Container>
      <Title>{title}</Title>
      <Name>{name}</Name>
    </Container>
  );
}
