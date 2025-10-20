/*configurações ou menu*/
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
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

export default function App() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

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
