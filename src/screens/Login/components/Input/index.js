import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import * as S from './styles';

import User from '../../../../assets/User.png';
import Password from '../../../../assets/Password.png';
import Eye from '../../../../assets/Eye.png';
import EyeClosed from '../../../../assets/Eye-closed.png';

import maskCpf from '../../../../utils/mask-cpf';

export default Input = ({type = 'cpf'}) => {
  const [isClosedViewPassword, setIsClosedViewPassword] = useState(true);
  const [cpf, setCpf] = useState('');
  const [isFocusInput, setIsFocusInput] = useState(false);

  if (type === 'cpf') {
    return (
      <S.Container focus={isFocusInput}>
        <S.Icon>
          <S.Image source={User} />
        </S.Icon>
        <S.Input
          placeholder="CPF"
          value={cpf}
          onChangeText={e => setCpf(maskCpf(e))}
          onFocused={(e) => console.log(true)}
          
        />
      </S.Container>
    );
  } else if (type === 'password') {
    return (
      <S.Container focus={isFocusInput}>
        <S.Icon>
          <S.Image source={Password} />
        </S.Icon>
        <S.Input
          placeholder="Senha"
          secureTextEntry={isClosedViewPassword}
          onFocused={() => setIsFocusInput(true)}
        />
        <TouchableOpacity
          onPress={() => setIsClosedViewPassword(prevState => !prevState)}>
          {isClosedViewPassword ? (
            <S.Image source={Eye} />
          ) : (
            <S.Image source={EyeClosed} />
          )}
        </TouchableOpacity>
      </S.Container>
    );
  }
};
