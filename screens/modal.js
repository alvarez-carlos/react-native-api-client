import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useFetch, useFetchPost } from '../hooks'
import AsyncStorage from '@react-native-community/async-storage'

const modalScreen = ({ navigation }) => {
  const id = navigation.getParam('_id')
  const url = `https://rest-api-alvarez-carlos.vercel.app/api/meals/${id}`
  const { loading, data: meal } = useFetch({
    url: url
  })
  // console.log(data: meal)
  return (

      <View style={styles.container}>
        {
          loading
          ?
            <Text>Loading...</Text>
          : 
            <>
              <Text>{meal.name}</Text>
              <Text>{meal.desc}</Text>
              <Button 
                title='Aceptar'
                onPress={ () => {
                    AsyncStorage.getItem('token')
                      .then(x => {    
                        if (x) {
                                              
                          useFetchPost(
                            {
                              item: {
                                method: 'POST', //method
                                headers:{ //content type para que la api pueda interpretar los datos que le estamos enviando
                                  'Content-Type': 'application/json',
                                  authorization: x
                                },
                                body: JSON.stringify(
                                  { 
                                    //envio de los datos. la propiedad de body solamente recive strings como tipo de datos. por lo tanto convertimos este objeto a un string con JSON.stringify
                                    meal_id: meal._id,
                                    user: navigation.getParam('user')
                                    // user_id: 'user1'
                                  }
                                )
                              }
                            }
                          )
                        }
                      })

                    // alert('Order generada con extito.')
                    navigation.navigate('MealsScreen')
                  }
                }
              />
              <Button 
                title='Cancelar'
                onPress={() => navigation.navigate('MealsScreen')}
              />
            </>
        }
      </View>
  );
}

export default modalScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
