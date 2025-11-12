import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
<ThemedView style={styles.titleContainer}>
  <ThemedText>This app includes example code to help you get started.</ThemedText>
  </ThemedView>
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require('@/assets/images/Death_Stranding_2-01.jpg'),
    require('@/assets/images/HellBlade.jpg'),
    require('@/assets/images/Monster-hunter.webp'),
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFBB00', dark: '#FFBB00' }}
      headerImage={
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logo}
          />
          {/* <AntDesign name="menu" size={24} color="black" /> */}
        </View>
      }
    >
      <ThemedView style={styles.heroContainer}>
        {/* Carrossel de Imagens */}
        <View style={styles.carouselContainer}>
          <TouchableOpacity onPress={prevImage} style={styles.arrowButton}>
            <Text style={styles.arrowText}>‹</Text>
          </TouchableOpacity>

          <Image
            source={images[currentIndex]}
            style={styles.carouselImage}
            contentFit="cover"
          />

          <TouchableOpacity onPress={nextImage} style={styles.arrowButton}>
            <Text style={styles.arrowText}>›</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.tagline}>Veja nossas categorias.</Text>
        <TouchableOpacity>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBB00',
    paddingVertical: 20,
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 400,
    height: 100,
  },
  heroContainer: {
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#F1A10C',
    marginBottom: 0,
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 16,
  },
  arrowButton: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  arrowText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  carouselImage: {
    width: 300,
    height: 160,
    borderRadius: 15,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
 },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 24,
    lineHeight: 22,
  },

  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
  
})