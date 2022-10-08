import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { palindromo } from '../../util';

export default function Palindromo() {
    const [palavra, setPalavra] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Palindromo</Text>
            <TextInput keyboardType='numeric' placeholder="Digite uma frase" onChangeText={(e) => setPalavra(e)} />
            <Text style={styles.valor}>{palindromo(palavra)}</Text>
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
