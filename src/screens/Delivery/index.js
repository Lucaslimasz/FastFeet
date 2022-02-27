import React from 'react';
import {FlatList, View} from 'react-native';
import NumberOfDelivery from '../../components/NumberOfDelivery';
import PackageInfo from '../../components/PackageInfo';
import Search from '../../components/Search';

import delivery from '../../utils/deliveries';

import Header from './Header';

import * as S from './styles';

export default Delivery = ({navigation}) => {
  const renderItem = (item) => {
    return (
      <PackageInfo
        key={item?.id}
        title={item?.title}
        deliveryDate={item?.deliveryDate}
        typeStatus={item?.typeStatus}
      />
    );
  };
  return (
    <S.Container>
      <Header navigation={navigation} />
      <S.Wrapper>
        <Search />
        <NumberOfDelivery />
        <S.FlatList
          data={delivery}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id}
        />
      </S.Wrapper>
    </S.Container>
  );
};
