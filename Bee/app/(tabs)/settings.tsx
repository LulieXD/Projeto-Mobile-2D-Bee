/*configurações ou menu*/

import { AntDesign, Feather, FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Settings = () => {
  const navigation = useNavigation();

  const store = () => {
    navigation.navigate('store'); 
  };
  const noticias = () => {
    navigation.navigate('noticia'); 
  };
  const notificacoes = () => {
    navigation.navigate('notificação'); 
  };
  const carrinho = () => {
    navigation.navigate('carrinho'); 
  };
  return (
    <SafeAreaView style={styles.container}> 
      
      {/* ---HEADER--- */}
      <View style={styles.header}>
        <Text style={styles.headerTexto}>MENU</Text>
      </View>

    {/*---BOTÕES---*/}
    
    {/*---loja---*/}
      <TouchableOpacity onPress={store}> 
        <View style={[styles.botoes, {borderWidth: 1}]}>
          <AntDesign name="tag" size={35} color="white"/> 
          <Text style={styles.textoBotoes}>Loja</Text> 
        </View>
      </TouchableOpacity>

      {/*---noticias---*/}
      <TouchableOpacity onPress={noticias}> 
        <View style={styles.botoes}>
          <FontAwesome6 name="newspaper" size={35} color="white"/> 
          <Text style={styles.textoBotoes}>Notícias</Text> 
        </View>
      </TouchableOpacity>

      {/*---notificações---*/}
      <TouchableOpacity onPress={notificacoes}> 
        <View style={[styles.botoes, {borderWidth: 1}]}>
          <Feather name="bell" size={35} color="white"/> 
          <Text style={styles.textoBotoes}>Notificações</Text> 
        </View>
      </TouchableOpacity>

      {/*---carrinho---*/}
      <TouchableOpacity onPress={carrinho}> 
        <View style={styles.botoes}>
          <Feather name="shopping-cart" size={35} color="white"/> 
          <Text style={styles.textoBotoes}>Carrinho</Text> 
        </View>
      </TouchableOpacity>

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

  botoes: {
    width: '100%',
    paddingVertical: 10,
    paddingLeft: 15,
    height: 60,
    backgroundColor: '#151515',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#534F4F',
  },
  
  textoBotoes: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 15,
  },
});

export default Settings;

