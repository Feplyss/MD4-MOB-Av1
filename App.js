import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/page/Home';
import Anagrama from './src/page/Anagrama';
import Fibonacci from './src/page/Fibonacci';
import Fatorial from './src/page/Fatorial';
import Palindromo from './src/page/Palindromo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Anagrama" component={Anagrama} options={{ headerShown: true, animation: 'slide_from_right' }} />
        <Stack.Screen name="Fibonacci" component={Fibonacci} options={{ headerShown: true, animation: 'slide_from_right' }} />
        <Stack.Screen name="Fatorial" component={Fatorial} options={{ headerShown: true, animation: 'slide_from_right' }} />
        <Stack.Screen name="Palindromo" component={Palindromo} options={{ headerShown: true, animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </NavigationContainer>
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
