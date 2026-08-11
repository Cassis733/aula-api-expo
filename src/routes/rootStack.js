import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../telas/home';
import Login from '../telas/login';
import cadUsuario from '../telas/cadUsuario';
import recSenha from '../telas/recSenha';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

