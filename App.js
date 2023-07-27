import { useFonts } from 'expo-font';
import Navigator from './Src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './Src/Store/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Josefin': require('./Src/Assets/Josefin_Sans_/JosefinSans-BoldItalic.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}
