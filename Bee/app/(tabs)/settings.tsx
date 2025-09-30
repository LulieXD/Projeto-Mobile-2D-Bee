/*configurações ou menu*/

import { StyleSheet, Text, View } from 'react-native';

const header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoHeader}>MENU</Text> 
      </View>
      <View style={styles.botao}>
        <Text><button><a href="./explore">voltar</a></button></Text>
      </View>
    </View>
  );
};
<button><a href="./explore.tsx"></a></button>

//css
const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
    width: '100%', 
    height: 80,
    backgroundColor: '#FFBB00',
    
    // Alinha o texto da header
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoHeader: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default header;