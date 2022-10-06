import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { anagrama, fatorial, fibonacci, palindromo } from './src/util'

export default function App() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  const [n4, setN4] = useState(0);
  const [n5, setN5] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anagrama</Text>
      <TextInput keyboardType='numeric' placeholder="Digite uma frase" onChangeText={(e) => setN1(e)} />
      <TextInput keyboardType='numeric' placeholder="Digite uma frase" onChangeText={(e) => setN2(e)} />
      <Text style={styles.valor}>{anagrama(n1, n2)}</Text>

      <Text style={styles.titulo}>Fatorial</Text>
      <TextInput keyboardType='numeric' placeholder="Digite um número" onChangeText={(e) => setN3(e)}/>
      <Text style={styles.valor}>{fatorial(n3)}</Text>

      <Text style={styles.titulo}>Fibonacci</Text>
      <TextInput keyboardType='numeric' placeholder="Digite um número" onChangeText={(e) => setN4(e)} />
      <Text style={styles.valor}>{fibonacci(n4)}</Text>

      <Text style={styles.titulo}>Palindromo</Text>
      <TextInput keyboardType='numeric' placeholder="Digite uma frase" onChangeText={(e) => setN5(e)} />
      <Text style={styles.valor}>{palindromo(n5)}</Text>
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
  titulo: {
    marginTop: 40,
    fontSize: 20,
  },
  valor: {
  }
});
