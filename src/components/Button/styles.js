import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 19px 0;
  background-color: ${({theme}) => theme.colors.yellow};
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  margin: auto;
  color: ${({theme}) => theme.colors.title};
  font-weight: 600;
`;
