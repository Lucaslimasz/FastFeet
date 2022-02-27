import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
`;

export const Status = styled.View`
  align-items: center;
  ${({first}) => first && 'align-items: flex-start;'}
  ${({last}) => last && 'align-items: flex-end;'}
`;

export const Circle = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  margin-bottom: 8px;
  background: ${({theme, status}) =>
    status ? theme.colors.success : theme.colors.lines};
`;

export const ContainerStatus = styled.View`
  flex-direction: row;
  position: relative;
`;

export const Trace = styled.View`
  height: 5px;
  width: 250%;
  background: ${({status, theme}) =>
    status ? theme.colors.success : theme.colors.lines};
  position: absolute;
  top: 4.5px;
  left: 0;

  z-index: -1;
`;

export const Title = styled.Text``;
