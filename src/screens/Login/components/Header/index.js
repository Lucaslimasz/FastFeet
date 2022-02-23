import React from 'react';

import Logotipo from '../../../../assets/Logotipo.png';
import Logo from '../../../../assets/Logo.png';

import * as S from './styles';

export default Header = () => {
  return (
    <S.Container>
      <S.Image source={Logotipo} />
      <S.Image source={Logo} />
    </S.Container>
  );
};
