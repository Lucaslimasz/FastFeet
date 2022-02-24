import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

import Button from '../../components/Button';
import Header from './components/Header';
import Input from './components/Input';

import Checkbox from '../../assets/Checkbox.png';
import FF from '../../assets/FF.png';

import * as S from './styles';

export default Login = ({navigation}) => {
  return (
    <S.Container>
      <S.EffectFF source={FF} />
      <S.Wrapper>
        <Header />
        <S.Info>
          <S.Title>
            <S.Span>Entregador,</S.Span> você é o nosso maior valor
          </S.Title>
          <S.Description>
            Faça seu login para começar suas entregas.
          </S.Description>
        </S.Info>

        <Input />
        <Input type="password" />

        <S.Actions>
          <S.Remind>
            <Image source={Checkbox} />
            <S.ForgotPassword>Lembrar-me</S.ForgotPassword>
          </S.Remind>

          <TouchableOpacity>
            <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
          </TouchableOpacity>
        </S.Actions>

        <Button onPress={() => navigation.navigate('Delivery')}>Entrar</Button>
      </S.Wrapper>
    </S.Container>
  );
};
