// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Bipagem, Lista} from './views';


const Stack = createNativeStackNavigator(); 

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bipagem" component={Bipagem} />
        <Stack.Screen name="Lista" component={Lista} />
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Bipagem" component={Bipagem } options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


