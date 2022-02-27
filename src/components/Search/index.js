import React from 'react';
import {Image} from 'react-native'

import * as S from './styles';

import SearchIcon from '../../assets/Search.png';

export default Search = () => {
  return (
    <S.Container>
      <S.Input placeholder="Filtrar por bairro" />
      <Image source={SearchIcon} />
    </S.Container>
  );
};
