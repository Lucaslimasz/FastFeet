import React from 'react';
import {View} from 'react-native';

import * as S from './styles';

export default Status = ({TypeStatus}) => {
  return (
    <S.Container>
      {TypeStatus?.map((type, index) => (
        <S.Status
          key={type.id}
          first={index === 0}
          last={index + 1 === TypeStatus.length}>
          <S.ContainerStatus>
            <S.Circle status={type.status} />
            {index + 1 !== TypeStatus.length && (
              <S.Trace status={TypeStatus[index + 1].status} />
            )}
          </S.ContainerStatus>

          <S.Title>{type.Title}</S.Title>
        </S.Status>
      ))}
    </S.Container>
  );
};
