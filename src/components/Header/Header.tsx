import {StyleSheet, Text, View} from 'react-native';

export function Header() {
  return (
    <View>
      <Text style={style.title}>Ola</Text>
      <Text style={style.subTitle}>Testando app do SRC</Text>
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
