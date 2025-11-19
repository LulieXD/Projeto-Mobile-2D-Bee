/*configurações ou menu*/

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}> 
      
      {/* ---HEADER--- */}
      <View style={styles.header}>
        <Text style={styles.headerTexto}>CARRINHO</Text>
      </View>
    </SafeAreaView>
  );
};

//css
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'black',
  },

  header: {
    width: '100%', 
    height: 80,
    marginBottom: 25,
    backgroundColor: '#FFBB00',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  
  headerTexto: { 
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Settings;

