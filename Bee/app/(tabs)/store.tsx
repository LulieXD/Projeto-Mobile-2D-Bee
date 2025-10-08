/*configurações ou menu*/

import { Image, StyleSheet, Text, View } from 'react-native';

const header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View>
      {/* Imagem local */}
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.localImage}
      />
    </View>
      </View>
      <View style={styles.loja}>
        <Text style={styles.textoHeader}>MENU</Text>
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

  loja: {
    width: '100%',
    height: 80,
    backgroundColor: '#151515',
  },

  textoHeader: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 20,
  },

  localImage: {
      width: 400,
      height: 100,
      margin: 10,
  }
});

export default header;