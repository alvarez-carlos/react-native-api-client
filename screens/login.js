import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

// Error: the AsyncStorage was moved
//Solucion: intalled it from react comunity
// yarn add @react-native-community/async-storage

import AsyncStorage from '@react-native-community/async-storage'

import { useForm } from '../hooks'


const loginScreen= ({ navigation }) => {

    const inputsInitialState = {
        email: '',
        password: '',
    }

    const onSubmit = formTextInputValues => {
        console.log(formTextInputValues)
        fetch('https://rest-api-alvarez-carlos.vercel.app/api/auth/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email: formTextInputValues.email,
                password: formTextInputValues.password
            })
        })
            .then(res => res.text())
            .then(res => {
                try{
                    return JSON.parse(res)
                }
                catch{
                    throw res
                }
            })
            .then(res =>{
                AsyncStorage.setItem('token', res.token)
                navigation.navigate('MealsScreen', {user: formTextInputValues.email})
            })
            .catch(e => alert(e))
    }

    const { updateInputswithNewState, inputs, handleSubmit } = useForm(inputsInitialState, onSubmit)


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Email'
                value={inputs.email} //QUESTION?????
                onChangeText={updateInputswithNewState('email')}
                autoCapitalize='none'
            />
            <TextInput 
                style={styles.input} 
                placeholder='Password'
                secureTextEntry={true}
                value={inputs.password}  //QUESTION?????
                onChangeText={updateInputswithNewState('password')}
                autoCapitalize='none'
            />
            <Button 
                title='Iniciar sesión'
                onPress={handleSubmit}
            />
            <Button 
                title='Registrarse'
                onPress={() => navigation.navigate('RegisterScreen')}
            />
        </View>
    )
}

export default loginScreen

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal: 15
        },
        input:{
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            alignSelf: 'stretch',
            marginBottom: 10,
            padding: 5, 
        },
        title:{
            fontSize: 24,
            marginBottom: 16
        }
    }
)
