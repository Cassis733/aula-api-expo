import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
Import RootStack from './src/routs/RootStack';
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}
