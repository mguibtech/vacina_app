import {StyleSheet, Text, View} from 'react-native';
import {Prop} from './types';

export function Header({name}: Prop) {
  return (
    <View>
      <Text style={style.title}>Ola</Text>
      <Text style={style.subTitle}>{name}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 30,
  },
  subTitle: {
    color: 'black',
    fontSize: 15,
  },
});
