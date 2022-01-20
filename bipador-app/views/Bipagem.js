import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Bipagem(props) {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <Text>Bipagem</Text>
            <TextInput
                name = "tabela"
                style={{ height: 40 }}
                placeholder="o code do bipador vai aqui"
                onChangeText={newText => setText(newText)}
                // defaultValue={text}
            />
            {/* <Text style={{ padding: 10, fontSize: 42 }}>
                {text.split(' ').map((word) => word && '🍕').join('\n')}
            </Text> */}
            <Text>Resultado:</Text>

            <Text>
            {text.split(' ').map((word) => word).join(' 1 \n')}
            </Text>
            
            <Button
                title='enviar'
                color="#f194ff"
                onPress={() => props.navigation.navigate('Lista',{
                    tabela: {text}
                })}
                

            />
            <Button
                title='botão que vai levar para Home de volta'
                color="#f194ff"
                onPress={() => props.navigation.navigate('Home')}

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