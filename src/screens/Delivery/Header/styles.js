import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 60px 24px 60px;
  background: ${({theme}) => theme.colors.blue};
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerNames = styled.View``;

export const Wellcome = styled.Text`
  color: ${({theme}) => theme.colors.principal};
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.principal};
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 32px;
  color: ${({theme}) => theme.colors.principal};
  `;

export const ContainerLocation = styled.View`
  flex-direction: row;
  align-items: center;
  `;

export const Location = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.noBlue};
  margin-left: 8px;
`;
