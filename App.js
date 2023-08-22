import React, { useEffect, useState } from 'react'; 
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import Navigator from './Src/Navigation/Navigator'
import store from './Src/Store/store';
import { init } from './Src/SQLite';

export default function App() {
  const [isDbInitialized, setIsDbInitialized] = useState(false); 
  const [isFontsLoaded, setIsFontsLoaded] = useState(false); 

  useEffect(() => {

    init()
      .then((result) => {
        setIsDbInitialized(true); 
      })
      .catch(err => {

      });
  }, []);

  const [fontsLoaded] = useFonts({
    'JosefinSans-Bold': require('./Src/Assets/Fonts/Josefin_Sans_/JosefinSans-Bold.ttf'),
    'JosefinSans-Italic': require('./Src/Assets/Fonts/Josefin_Sans_/JosefinSans-Italic.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setIsFontsLoaded(true);
    }
  }, [fontsLoaded]);

  if (!isDbInitialized || !isFontsLoaded) {
    return null; 
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
