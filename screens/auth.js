import React, { useEffect } from 'react'
import { StyleSheet, ActivityIndicator, View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'


export default ({ navigation }) => {
    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(x => {
                navigation.navigate( x ? 'Root' : 'OnBoarding')
            })
    }, [])  //se ejecuta una sola vex por []
    
    return(
        <View style={styles.container}>
            <ActivityIndicator />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'stretch'
    }
})