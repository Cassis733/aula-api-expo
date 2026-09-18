

/*import { View, Text } from "react-native";

export default function Login(){
   // return (
        <View>
            <Text>CadUsuario</Text>
        </View>
    );
}
*/
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';

export default function Login() {
  // Estados para controlar qual botão está selecionado
  const [tipoUsuario, setTipoUsuario] = useState('cliente'); // 'cliente' ou 'prestador'
  const [aba, setAba] = useState('criar'); // 'entrar' ou 'criar'

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* --- CABEÇALHO --- */}
        <View style={styles.header}>
          <Text style={styles.logoTitle}>
            🛡️ SOS <Text style={styles.logoSub}>Car</Text>
          </Text>
        </View>

        {/* --- CARD PRINCIPAL --- */}
        <View style={styles.card}>
          
          {/* Alternador: Cliente / Prestador */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleBtn, tipoUsuario === 'cliente' && styles.btnAtivo]}
              onPress={() => setTipoUsuario('cliente')}
            >
              <Text style={[styles.toggleText, tipoUsuario === 'cliente' && styles.textAtivo]}>
                Sou cliente
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.toggleBtn, tipoUsuario === 'prestador' && styles.btnAtivo]}
              onPress={() => setTipoUsuario('prestador')}
            >
              <Text style={[styles.toggleText, tipoUsuario === 'prestador' && styles.textAtivo]}>
                Sou prestador
              </Text>
            </TouchableOpacity>
          </View>

          {/* Alternador: Entrar / Criar conta */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleBtn, aba === 'entrar' && styles.btnAtivo]}
              onPress={() => setAba('entrar')}
            >
              <Text style={[styles.toggleText, aba === 'entrar' && styles.textAtivo]}>
                Entrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.toggleBtn, aba === 'criar' && styles.btnAtivo]}
              onPress={() => setAba('criar')}
            >
              <Text style={[styles.toggleText, aba === 'criar' && styles.textAtivo]}>
                Criar conta
              </Text>
            </TouchableOpacity>
          </View>

          {/* --- FORMULÁRIO DE CADASTRO --- */}
          <View style={styles.form}>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" />

            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.input} secureTextEntry={true} />

            <Text style={styles.label}>CPF</Text>
            <TextInput style={styles.input} placeholder="000.000.000-0" keyboardType="numeric" />

            <Text style={styles.label}>
              Telefone <Text style={styles.labelOpcional}>(opcional)</Text>
            </Text>
            <TextInput style={styles.input} placeholder="(00) 00000-0000" keyboardType="phone-pad" />

            {/* Botão Principal */}
            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.btnSubmitText}>Criar conta</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* --- RODAPÉ --- */}
        <View style={styles.footer}>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>Sobre</Text>
            <Text style={styles.footerLink}>Ajuda</Text>
            <Text style={styles.footerLink}>Termos de Uso</Text>
            <Text style={styles.footerLink}>Privacidade</Text>
          </View>
          <Text style={styles.footerLink}>Acesso administrativo</Text>
          <Text style={styles.copyright}>© 2026 SOS Car — Assistência automotiva</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// --- ESTILOS (CSS DO REACT NATIVE) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F8',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  logoSub: {
    color: '#5C6BC0',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    // Sombra para iOS e Android
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F5',
    borderRadius: 25,
    padding: 4,
    marginBottom: 12,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  btnAtivo: {
    backgroundColor: '#5C73F2',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  textAtivo: {
    color: '#FFF',
  },
  form: {
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 6,
    marginTop: 10,
  },
  labelOpcional: {
    fontWeight: 'normal',
    color: '#888',
  },
  input: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
  },
  btnSubmit: {
    backgroundColor: '#4E65FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  btnSubmitText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
    gap: 10,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 12,
  },
  footerLink: {
    color: '#666',
    fontSize: 12,
  },
  copyright: {
    color: '#999',
    fontSize: 11,
    marginTop: 5,
  },
});    