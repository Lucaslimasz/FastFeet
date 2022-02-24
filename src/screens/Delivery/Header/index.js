import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import * as S from './styles';

import Logout from '../../../assets/Logout.png';
import Location from '../../../assets/Location.png';

export default Header = ({navigation}) => {
  return (
    <S.Container>
      <S.Top>
        <S.ContainerNames>
          <S.Wellcome>Bem vindos,</S.Wellcome>
          <S.Name>Lucas Lima</S.Name>
        </S.ContainerNames>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={Logout} />
        </TouchableOpacity>
      </S.Top>

      <S.ContainerTitle>
        <S.Title>Entregas</S.Title>
        <S.ContainerLocation>
          <Image source={Location} />
          <S.Location>João Pessoa</S.Location>
        </S.ContainerLocation>
      </S.ContainerTitle>
    </S.Container>
  );
};
