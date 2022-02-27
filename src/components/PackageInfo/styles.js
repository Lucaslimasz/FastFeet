import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({theme}) => theme.colors.principal};
  border-radius: 4px;
  padding-top: 24px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding: 0 16px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-left: 12px;
  color: ${({theme}) => theme.colors.title};
`;

export const Date = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.base};
`;

export const Bottom = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 15px 16px;
  margin-top: 24px;

  background: ${({theme}) => theme.colors.yellowLow};
`;

export const Detail = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: ${({theme}) => theme.colors.title};
`;
