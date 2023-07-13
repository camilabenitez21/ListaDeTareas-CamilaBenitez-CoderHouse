import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
  return (
    <View 
        style={styles.containerHeader}>
      <Text style ={styles.text}>Mi Tienda Online</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: '10%',
        backgroundColor: colors.Grey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop:35,
        fontSize: 25,
        fontFamily: 'Josefin'
    }
})