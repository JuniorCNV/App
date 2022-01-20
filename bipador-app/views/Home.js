import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function Home(props){
    return(
        <View style={styles.container}>
      <Text>home</Text>
      
      <Text>teste atualizado</Text>
      <Button
                title='botão que vai levar para Bipagem' 
                color="#f194ff"
                onPress={()=> props.navigation.navigate('Bipagem')}
                
            />
      <StatusBar style="auto" />
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