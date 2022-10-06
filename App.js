import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { fatorial } from './src/util'

export default function App() {
  const [numero, setNumero] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput keyboardType='numeric' placeholder="Informe um número" onChangeText={(e) => setNumero(e)} />
      <Text style={styles.valor}>{fatorial(numero)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valor: {
    paddingTop: 16
  }
});
