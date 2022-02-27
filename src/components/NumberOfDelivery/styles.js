import styled from 'styled-components/native';

export const Container = styled.View``;

export const Trace = styled.View`
  width: 100%;
  height: 1px;
  border: .6px solid ${({theme}) => theme.colors.lines};
  opacity: 0.6;
  
  position: absolute;
  top: 9px;
`;

export const Value = styled.Text`
  font-weight: 500;
  font-size: 15px;
  text-align: center;

  color: ${({theme}) => theme.colors.complement};
  background: ${({theme}) => theme.colors.background};

  width: 40%;
  margin: 0 auto 16px;
`;
