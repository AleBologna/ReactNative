import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Karla': require('./src/Assets/Fonts/Karla/Karla-Light.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
  <Navigator/>
  );
}

