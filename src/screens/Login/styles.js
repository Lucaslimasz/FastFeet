import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.blue};
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 32px;
`;

export const EffectFF = styled.Image`
  position: absolute;
  top: 20px;
`;

export const Info = styled.View`
  margin: 90px 0 44px;
`;

export const Title = styled.Text`
  font-size: 44px;
  font-weight: 800;
  line-height: 46px;
  font-style: italic;
  color: ${({theme}) => theme.colors.principal};
`;

export const Span = styled.Text`
  color: ${({theme}) => theme.colors.yellow};
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: ${({theme}) => theme.colors.principal};
  width: 60%;
  margin-top: 16px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 24px;
`;

export const Remind = styled.TouchableOpacity`
  color: ${({theme}) => theme.colors.noBlue};
  flex-direction: row;
  align-items: center;
`;

export const ForgotPassword = styled.Text`
  color: ${({theme}) => theme.colors.noBlue};
  margin-left: 12px;
`;
