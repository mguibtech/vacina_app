import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.secondary};
  border-width: 1px;
  border-color: ${props => props.theme.colors.secondary};
  padding: 10px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.onPrimary};
  font-size: 20px;
`;

export const Name = styled.Text`
  color: ${props => props.theme.colors.onPrimary};
  font-size: 30px;
`;
