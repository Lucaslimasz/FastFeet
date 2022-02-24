import React from 'react';

import * as S from './styles';

export default Button = ({children, onPress}) => {
  return (
    <S.Container onPress={onPress}>
      <S.TextButton>{children}</S.TextButton>
    </S.Container>
  );
};
