import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from '../components'
import { useFetch } from '../hooks'

const mealsScreen = ({ navigation }) => {
  const url = 'https://rest-api-alvarez-carlos.vercel.app/api/meals/'
  const { loading, data: meals } = useFetch({ url: url })
  return (
    <View style={styles.container}>
      {
        loading
        ?
          <Text>Loading....</Text>
        :
          <FlatList 
            data={meals}
            keyExtractor={item => item._id}
            // renderItem={({ item }) => <View style={styles.lista}><Text>{item.name}</Text></View>}
            renderItem={({ item }) => <ListItem 
                onPress={() => navigation.navigate('ModalScreen', { _id: item._id, user: navigation.getParam('user') })}
                item={item.name}
            />}
          />
      }
    </View>
  );
}

mealsScreen.navigationOptions = (
    {
        title: 'Comidas disponibles'
    }
)

export default mealsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  lista:{
      alignSlef: 'stretch'
  }
});