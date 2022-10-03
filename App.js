import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Input, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [number, setNumber] = useState('');

  function fatorial(num){
    var res = 1;
    for(var i = num; i > 0; i--){
      res = res * i
    }
    return (<Text>{res}</Text>);
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="numero" onChange={setNumber} value={number}/>
      <Button title="Calcular" onPress={() => fatorial({number})}></Button>
      <Text>{number}</Text>
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
});
