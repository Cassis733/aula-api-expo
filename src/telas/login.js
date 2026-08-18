import { View, Text, Pressable } from "react-native";
import { Link, useNavigation } from '@react-navigation/native';

import { Button } from '@react-navigation/elements';

export default function Login(){

    const navigation = useNavigation();

    return (
        <View>
            <Text>Login</Text>
            <Button screen="home">Esqueci a senha</Button>
            <Link screen="recSenha">Acessar o sistema</Link>
            <Pressable
                onPress={() => navigation.navigate('cadUsuario')}
            >
                <Text>Cadastrar Usuário</Text>
            </Pressable>
        </View>
    );
}