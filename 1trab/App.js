import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Aluno from './src/Aluno/Aluno';
import Imagem from './src/Imagem/Imagem';

export default function App() {
  return (
    <View style={styles.container}>
      <Imagem/>
      <Aluno/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffabaf',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: "space-around",
  },
});
