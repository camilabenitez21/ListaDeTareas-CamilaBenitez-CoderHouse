import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/Colors';

const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyword, setKeyword] = useState("")
    const {width, height}  = useWindowDimensions()

    const onErase = () => {
        setKeyword("")
        onSearch("")
    }

  return (
    <View style ={width > 350 ? styles.container : styles.containerSm}>
        <TextInput style ={styles.input} 
            placeholder='Search...'
            value={keyword}
            onChangeText={setKeyword}
        />
        <Pressable onPress={()=>onSearch(keyword)}>
            <FontAwesome name="search" size={24} color="black" />
        </Pressable>
        <Pressable onPress={onErase}>
            <FontAwesome5 name="eraser" size={24} color="black" />
        </Pressable>
        
       { error ?
         <Text>
            {error}
        </Text>
        : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: colors.Pink,
    minWidth: 350,
  },
  containerSm: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: colors.Pink,
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.LightPink,
    borderRadius: 10,
    marginRight: 8,
    maxWidth: 250,
  },
});
