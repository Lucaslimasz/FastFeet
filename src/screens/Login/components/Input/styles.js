import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  ${({focus}) =>
    focus && 'border: 2px solid ${({theme}) => theme.colors.yellow};'}
`;

export const Icon = styled.View`
  padding-right: 20px;
  border-right-width: 1px;
  border-color: ${({theme}) => theme.colors.lines};
`;

export const Image = styled.Image``;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0 16px;
  font-size: 17px;
  color: ${({theme}) => theme.colors.base};
`;
