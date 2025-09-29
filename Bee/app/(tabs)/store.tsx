/*loja de jogos ou carrinho*/

import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ }}
      headerImage={
        <IconSymbol
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Os mais jogados.</ThemedText>
      </ThemedView>
      <ThemedText type="title">Novidades.</ThemedText>
      <ThemedText type="title">Espaço Indie.</ThemedText>
    
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
