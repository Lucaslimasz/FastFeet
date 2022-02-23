import React from 'react';

import * as S from './styles';

export default Button = ({children}) => {
  return (
    <S.Container>
      <S.TextButton>{children}</S.TextButton>
    </S.Container>
  );
};
