// Importa funções e componentes do React e React Native
import { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

// Importa ícones (o olho de mostrar/ocultar senha)
import { Feather } from '@expo/vector-icons';

// Importa componentes personalizados do projeto (tema)
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

// Componente principal da tela
export default function HomeScreen() {

  // Estados: guardam valores digitados e se a senha aparece ou não
  const [username, setUsername] = useState('');   // Campo usuário
  const [password, setPassword] = useState('');   // Campo senha
  const [showPassword, setShowPassword] = useState(false); // Mostrar/ocultar senha

  // Função chamada ao clicar no botão de Login
  const handleLogin = () => {
    // Se usuário e senha estiverem preenchidos, mostra mensagem
    if (username && password) {
      Alert.alert('Login', `Bem-vindo, ${username}!`);
    } else { 
      // Se faltar algo, mostra erro
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    // Contêiner principal
    <View style={styles.container}>
      
      {/* Quadrado de fundo apenas para enfeite */}
      <View style={styles.whiteSquare}></View>

      {/* Título */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.blackText}>Bem-vindo!</ThemedText>
      </ThemedView>

      {/* Campo Usuário */}
      <ThemedView style={styles.inputContainer}>
        <ThemedText type="subtitle" style={styles.blackText}>Usuário</ThemedText>

        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          placeholderTextColor="#999"
          value={username}          // Mostra o valor digitado
          onChangeText={setUsername} // Atualiza o estado quando digita
        />
      </ThemedView>

      {/* Campo Senha */}
      <ThemedView style={styles.inputContainer}>
        <ThemedText type="subtitle" style={styles.blackText}>Senha</ThemedText>

        {/* Wrapper com input + ícone */}
        <View style={styles.passwordWrapper}>
          
          <TextInput
            style={styles.inputPassword}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}  // Se false → mostra senha; se true → oculta
            value={password}
            onChangeText={setPassword}        // Atualiza senha
          />

          {/* Botão do olho para mostrar/ocultar senha */}
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? 'eye' : 'eye-off'} // Troca o ícone
              size={22}
              color="#FFF"
            />
          </TouchableOpacity>

        </View>
      </ThemedView>

      {/* Botão de Entrar */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}

// Estilos visuais da tela
const styles = StyleSheet.create({

  // Estilo do contêiner principal
  container: {
    flex: 1,
    backgroundColor: '#FFBB00',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Quadrado decorativo do fundo
  whiteSquare: {
    position: 'absolute',
    top: 80,
    width: '90%',
    height: 430,
    backgroundColor: '#F1A10C',
    borderRadius: 30,
    zIndex: 0,
  },

  // Texto preto
  blackText: {
    color: '#000',
  },

  // Contêiner do título
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
    zIndex: 1,
  },

  // Contêiner de cada input
  inputContainer: {
    width: '85%',
    marginBottom: 15,
    zIndex: 1,
  },

  // Estilo do input de usuário
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#000',
    color: '#FFF',
    marginTop: 5,
  },

  // Wrapper da senha + ícone
  passwordWrapper: {
    flexDirection: 'row',       // Input ao lado do ícone
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 5,
    paddingHorizontal: 12,
  },

  // Input só da senha
  inputPassword: {
    flex: 1,  // Ocupa todo espaço
    height: 45,
    color: '#FFF',
  },

  // Botão principal
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    width: '85%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    zIndex: 1,
  },

  // Texto do botão
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
