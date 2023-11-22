import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.secondary.main};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.secondary.main};
  padding: 10px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary.onMain};
  font-size: 20px;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.primary.onMain};
  font-size: 30px;
`;
