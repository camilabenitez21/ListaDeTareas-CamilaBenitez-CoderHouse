import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import Navigator from './src/Navigation/Navigator';
import store from './Src/Store/store';
import { init } from './Src/SQLite/index';

export default function App() {
  useEffect(() => {
    init()
      .then((result) => {
        console.log('DB initialized/dropped');
        console.log(result);
      })
      .catch((err) => {
        console.log('Initialization DB failed:');
        console.log(err.message);
      });
  }, []);

  const [fontsLoaded] = useFonts({
    'Josefin': require('./src/Assets/Fonts/Josefin_Sans/JosefinSans-Regular.ttf'),
    'Ubuntu': require('./src/Assets/Fonts/Ubuntu/Ubuntu-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
