import React from 'react';
import {Image} from 'react-native';

import * as S from './styles';

import Package from '../../assets/Package.png';
import Arrow from '../../assets/Arrow.png';
import Status from '../Status';

export default PackageInfo = ({title, deliveryDate, typeStatus}) => {
  return (
    <S.Container>
      <S.Top>
        <S.ContainerTitle>
          <Image source={Package} />
          <S.Title>{title}</S.Title>
        </S.ContainerTitle>

        <S.Date>{deliveryDate}</S.Date>
      </S.Top>
      <Status TypeStatus={typeStatus} />
      <S.Bottom>
        <S.Detail>Detalhes</S.Detail>
        <Image source={Arrow} />
      </S.Bottom>
    </S.Container>
  );
};
