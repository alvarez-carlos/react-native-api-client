import React from 'react'
import { Alert, StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { useForm } from '../hooks'


const loginScreen= ({ navigation }) => {

    const inputsInitialState = {
        email: '',
        password: '',
    }

    const onSubmit = formTextInputValues => {
        console.log(formTextInputValues)
        fetch('https://rest-api-alvarez-carlos.vercel.app/api/auth/register',
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
            .then(data => {
                if (data === 'ok'){
                    console.log('Usuario creado con exito!')
                    // return Alert.alert(
                    //      'Exito',
                    //      'Usuario creado con éxito',
                    //      [
                    //          {
                    //              text: 'Ir a inicio',
                    //              onPress: () => navigation.navigate('LoginScreen')
                    //          }
                    //      ]
                    // )
                    alert('Usuario creado con exito')
                    return navigation.navigate('LoginScreen')
                }
                if (data === 'existe'){
                    alert('El usuario ya esta en uso')
                    return
                }
                // Alert.alert(
                //     'Error',
                //     data,
                //     [
                //         {
                //             text: 'Ir a inicio',
                //             onPress: () => navigation.navigate('LoginScreen')
                //         }
                //     ]
                // )
                alert(data)
                navigation.navigate('LoginScreen')
            })
    }

    const { updateInputswithNewState, inputs, handleSubmit } = useForm(inputsInitialState, onSubmit)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrarse</Text>
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
                title='Enviar'
                // onPress={() => {handleSubmit()}} // executing the Fn
                // onPress={() => {handleSubmit}} // Passing the fun Reference
                onPress={handleSubmit} // exexution the funcion 
            />
            <Button 
                title='Volver al inicio'
                onPress={() => navigation.navigate('LoginScreen')}
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
