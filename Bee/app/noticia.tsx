// Exemplo: /app/_layout.js (Se este é o seu Stack global)

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      
      {/* 1. Remove a header da sua página 'noticia' */}
      <Stack.Screen 
        name="noticia" 
        options={{
          headerShown: false, 
        }}
      />
      
      {/* 2. Remove a header da sua navegação de abas (se existir) */}
      <Stack.Screen 
        name="(tabs)" // Se você usa um grupo de abas
        options={{
          headerShown: false,
        }}
      />
      
      {/* ... outras telas ... */}
      
    </Stack>
  );
}