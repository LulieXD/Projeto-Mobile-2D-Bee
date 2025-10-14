/*configurações ou menu*/

import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';



const header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoHeader}>MENU</Text>
      </View>
      <a href="./explore"><View style={styles.loja}>
      <Text><AntDesign name="tag" size={24} color="white"/></Text> 
        <Text style={styles.textoHeader}>Loja</Text>
        
      </View></a>
    </View>
  );
};
<button><a href="./explore.tsx"></a></button>

export default header;

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
    marginTop: 30,
    height: '90%',
    backgroundColor: '#151515',
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#534F4F'
  },

  textoHeader: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 20,
  },
});


