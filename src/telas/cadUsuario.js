import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  Image 
} from 'react-native';

export default function Login() {
  const [tipoUsuario, setTipoUsuario] = useState('cliente'); // 'cliente' ou 'prestador'
  const [aba, setAba] = useState('entrar'); // 'entrar' ou 'criar'

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* --- CABEÇALHO --- */}
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://i.imgur.com/vH3yq9X.png' }} // Substitua pela imagem do seu logo/carro se preferir
            style={styles.headerLogoImage} 
            resizeMode="contain"
          />
          <Text style={styles.logoTitle}>
            SOS <Text style={styles.logoSub}>Car</Text>
          </Text>
        </View>

        {/* --- BANNER DE CAPA --- */}
        <View style={styles.bannerContainer}>
          <Image 
            source={{ uri: 'https://i.imgur.com/vH3yq9X.png' }} // URL da imagem principal do carro SOSCAR
            style={styles.bannerImage}
            resizeMode="contain"
          />
        </View>

        {/* --- SEÇÃO INFORMATIVA --- */}
        <View style={styles.infoSection}>
          <Text style={styles.mainTitle}>Precisa de socorro no veículo?</Text>
          <Text style={styles.subTitle}>
            Peça ajuda ou atenda quem precisa — rápido, simples e com acompanhamento em tempo real.
          </Text>

          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <View style={styles.iconBox}><Text style={styles.iconText}>⏱️</Text></View>
              <Text style={styles.featureText}>Atendimento rápido, perto de você</Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.iconBox}><Text style={styles.iconText}>🛡️</Text></View>
              <Text style={styles.featureText}>
                Prestadores por categoria: mecânico, borracheiro, auto elétrica e guincho
              </Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.iconBox}><Text style={styles.iconText}>⭐</Text></View>
              <Text style={styles.featureText}>Acompanhe o status e avalie o atendimento</Text>
            </View>
          </View>
        </View>

        {/* --- CARD PRINCIPAL DE LOGIN / CADASTRO --- */}
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

          {/* --- FORMULÁRIO --- */}
          <View style={styles.form}>
            {aba === 'criar' && (
              <>
                <Text style={styles.label}>Nome completo</Text>
                <TextInput style={styles.input} />
              </>
            )}

            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="email-address" 
              autoCapitalize="none"
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.input} secureTextEntry={true} />

            {aba === 'criar' && (
              <>
                <Text style={styles.label}>CPF</Text>
                <TextInput style={styles.input} placeholder="000.000.000-0" keyboardType="numeric" />

                <Text style={styles.label}>
                  Telefone <Text style={styles.labelOpcional}>(opcional)</Text>
                </Text>
                <TextInput style={styles.input} placeholder="(00) 00000-0000" keyboardType="phone-pad" />
              </>
            )}

            {/* Botão Principal */}
            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.btnSubmitText}>
                {aba === 'entrar' ? 'Entrar' : 'Criar conta'}
              </Text>
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

// --- ESTILOS COMPATÍVEIS COM A NOVA INTERFACE ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F5', // Tom suave de fundo claro/amarelado
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
    gap: 8,
  },
  headerLogoImage: {
    width: 35,
    height: 35,
  },
  logoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  logoSub: {
    color: '#F5B800', // Dourado do SOSCar
  },
  bannerContainer: {
    width: '100%',
    height: 180,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  infoSection: {
    width: '100%',
    marginVertical: 15,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111',
    marginBottom: 8,
    lineHeight: 28,
  },
  subTitle: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },
  featureList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 38,
    height: 38,
    backgroundColor: '#FEF3D6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  featureText: {
    flex: 1,
    fontSize: 14,
    color: '#444',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    // Sombras
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F7',
    borderRadius: 25,
    padding: 4,
    marginBottom: 12,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  btnAtivo: {
    backgroundColor: '#F5B800', // Amarelo/Dourado principal
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },
  textAtivo: {
    color: '#111',
  },
  form: {
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    marginTop: 12,
  },
  labelOpcional: {
    fontWeight: 'normal',
    color: '#888',
  },
  input: {
    backgroundColor: '#F9F9FB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  btnSubmit: {
    backgroundColor: '#F5B800',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  btnSubmitText: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 35,
    alignItems: 'center',
    gap: 10,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 12,
  },
  footerLink: {
    color: '#777',
    fontSize: 12,
  },
  copyright: {
    color: '#AAA',
    fontSize: 11,
    marginTop: 5,
  },
});
