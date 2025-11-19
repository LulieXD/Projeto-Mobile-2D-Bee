import { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Ícone olho
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Login', `Bem-vindo, ${username}!`);
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.whiteSquare}></View>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.blackText}>Bem-vindo!</ThemedText>
      </ThemedView>

      {/* Usuário */}
      <ThemedView style={styles.inputContainer}>
        <ThemedText type="subtitle" style={styles.blackText}>Usuário</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
      </ThemedView>

      {/* Senha */}
      <ThemedView style={styles.inputContainer}>
        <ThemedText type="subtitle" style={styles.blackText}>Senha</ThemedText>

        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={22}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>
      </ThemedView>

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBB00',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  whiteSquare: {
    position: 'absolute',
    top: 80,
    width: '90%',
    height: 430,
    backgroundColor: '#F1A10C',
    borderRadius: 30,
    zIndex: 0,
  },

  blackText: {
    color: '#000',
  },

  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
    zIndex: 1,
  },

  inputContainer: {
    width: '85%',
    marginBottom: 15,
    zIndex: 1,
  },

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

  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 5,
    paddingHorizontal: 12,
  },

  inputPassword: {
    flex: 1,
    height: 45,
    color: '#FFF',
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    width: '85%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    zIndex: 1,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
