import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../telas/home';
import Login from '../telas/login';
import CadUsuario from '../telas/cadUsuario';
import RecSenha from '../telas/recSenha';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="login" >
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="cadUsuario"
        component={CadUsuario}
        options={{ title: 'Cadastro de Usuario' }}
      />
      <Stack.Screen
        name="recSenha"
        component={RecSenha}
        options={{ title: 'Recuperação de  Senha' }}
      />
    </Stack.Navigator>
  );
}