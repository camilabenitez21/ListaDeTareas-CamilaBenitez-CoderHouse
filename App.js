import { useFonts } from 'expo-font';
import Navigator from './Src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Josefin': require('./Src/Assets/Josefin_Sans_/JosefinSans-BoldItalic.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator/>
  );
}
