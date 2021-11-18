import React from 'react'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

const ListItem = ({ onPress, item }) => {
   return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
   )
}


export default ListItem

const styles = StyleSheet.create(
    {
        container:{
             paddingHorizontal: 15,
             height: 60,
             justifyContent: 'center',
             borderBottomWidth: 1,
             borderBottomColor: '#eee'
        },
        text:{
            fontSize: 18,
        }
    }
)
