import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { fibonacci } from '../../util';

export default function Fibonacci() {
    const [numero, setNumero] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Fibonacci</Text>
            <TextInput keyboardType='numeric' placeholder="Informe um número" onChangeText={(e) => setNumero(numero)} />
            <Text style={styles.valor}>{fibonacci(numero)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titulo: {
        marginTop: 40,
        fontSize: 20,
    }
});
