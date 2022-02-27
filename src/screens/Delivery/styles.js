import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const Wrapper = styled.View`
  padding: 53px 24px;
`;

export const FlatList = styled.FlatList`  
  height: 70%;
`;
