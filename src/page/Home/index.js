import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Fibonacci() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.areaButton} onPress={() => { navigation.navigate('Anagrama') }}>
                <Text style={styles.labelButton}>Anagrama</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.areaButton} onPress={() => { navigation.navigate('Palindromo') }}>
                <Text style={styles.labelButton}>Palindromo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.areaButton} onPress={() => { navigation.navigate('Fatorial') }}>
                <Text style={styles.labelButton}>Fatorial</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.areaButton} onPress={() => { navigation.navigate('Fibonacci') }}>
                <Text style={styles.labelButton}>Fibonacci</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titulo: {
        marginTop: 40,
        fontSize: 20,
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: 'wrap',
        margin: 20
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 25,
        height: 45
    },
    areaButton: {
        backgroundColor: '#ecffff',
        borderRadius: 5,
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 2,
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: ''
    }
});
