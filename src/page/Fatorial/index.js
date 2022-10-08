import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { fatorial } from '../../util';

export default function Fatorial() {
    const [numero, setNumero] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Fatorial</Text>
            <TextInput keyboardType='numeric' placeholder="Informe um número" onChangeText={(e) => setNumero(numero)} />
            <Text style={styles.valor}>{fatorial(numero)}</Text>
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
