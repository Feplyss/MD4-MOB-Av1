import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { anagrama } from '../../util/';

export default function Anagrama() {
    const [palabra1, setPalabra1] = useState(0);
    const [palabra2, setPalabra2] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Anagrama</Text>
            <TextInput placeholder="Digite a primeira frase" onChangeText={(e) => setPalabra1(e)} />
            <TextInput placeholder="Digite a segunda frase" onChangeText={(e) => setPalabra2(e)} />
            <Text style={styles.valor}>{anagrama(palabra1, palabra2)}</Text>
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
