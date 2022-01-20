import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function Home(props) {
    console.log(props.route.params.tabela.text);

    return (
    
        <View style={styles.container}>
            <Text>
                Segue a tabela Seguinte {'\n'}{props.route.params.tabela.text.split(' ').map((word) => word).join(' 1 \n')}
            </Text>
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