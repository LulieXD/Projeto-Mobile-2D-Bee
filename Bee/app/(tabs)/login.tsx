  import { useState } from 'react';
  import { StyleSheet, View, TextInput, Alert, TouchableOpacity, Text } from 'react-native';
  import { ThemedText } from '@/components/ThemedText';
  import { ThemedView } from '@/components/ThemedView';

  export default function HomeScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
      if (username && password) {
        Alert.alert('Login', `Bem-vindo, ${username}!`);
      } else {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      }
    };

    return (
      <View style={styles.container}>
        {/* White Square as Background */}
        <View style={styles.whiteSquare}></View>

        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Bem-vindo!</ThemedText>
        </ThemedView>

        {/* Campo de Usuário */}
        <ThemedView style={styles.inputContainer}>
          <ThemedText type="subtitle">Usuário</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
            value={username}
            onChangeText={setUsername}
          />
        </ThemedView>

        {/* Campo de Senha */}
        <ThemedView style={styles.inputContainer}>
          <ThemedText type="subtitle">Senha</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </ThemedView>

        {/* Botão de Login com TouchableOpacity */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFBB00', // Cor de fundo da tela
      paddingTop: 0.5,
      padding: 20,
      justifyContent: 'center', // Centraliza os elementos
      position: 'relative', // Para permitir que o whiteSquare fique sobre o fundo
    },
    titleContainer: {
      alignItems: 'center',
      marginBottom: 4,
      zIndex: 1, // Garante que o título fique acima do whiteSquare
    },
    inputContainer: {
      marginBottom: 20,
      zIndex: 1, // Garante que os campos de input fiquem acima do whiteSquare
    },
    input: {
      height: 40,
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    buttonContainer: {
      marginTop: 20,
      zIndex: 1, // Garante que o botão fique acima do whiteSquare
      alignItems: 'center',
    },

    // Estilo do whiteSquare
    whiteSquare: {
      position: 'absolute',
      top: 70,  // Ajusta a posição para aparecer atrás do conteúdo
      left: '5%',  // Ajuste de largura
      width: '90%',
      height: 400,  // Define o tamanho do whiteSquare
      backgroundColor: '#F1A10C',
      borderRadius: 30,
      zIndex: 0,  // Faz o whiteSquare ficar atrás dos outros componentes
    },

    // Estilo do botão
    button: {
      backgroundColor: '#000', // Cor do botão
      paddingVertical: 10,         // Tamanho vertical
      paddingHorizontal: 20,       // Tamanho horizontal
      borderRadius: 25,           // Bordas arredondadas
      alignItems: 'center',       // Alinha o texto no centro
      justifyContent: 'center',
      width: '50%',               // Botão de tamanho médio (ajustável)
    },
    buttonText: {
      color: '#F1A10C',              // Cor do texto
      fontSize: 16,               // Tamanho da fonte
      fontWeight: 'bold',         // Negrito
    },
  });
