import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Src/Components/Header';
import Home from './Src/Screens/Home';
import ItemListCategory from './Src/Screens/ItemListCategory';
import { useState } from 'react';
import {useFonts} from 'expo-font';

export default function App() {

    const [categorySelected, setCategorySelected] = useState("")
  
    const [fontsLoaded] = useFonts({
      'Josefin': require('./Src/Assets/Josefin_Sans_/JosefinSans-Regular.ttf')
    });
  
    if (!fontsLoaded) {
      return null;
    }
    
    return (
      <View style = {styles.container}>
        <Header/>
        {
          categorySelected ? 
          <ItemListCategory 
            category={categorySelected}
            setCategory={setCategorySelected}
          /> :
          <Home
            setCategorySelected={setCategorySelected}
          />
        }
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })