import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 19px 24px;
  background: ${({theme}) => theme.colors.principal};

  flex-direction: row;
  justify-content: space-between;

  position: absolute;
  top: -30px;
  left: 24px;
`;

export const Input = styled.TextInput`
  font-size: 15px;
  color: ${({theme}) => theme.colors.base};
`;
