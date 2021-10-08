import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//usando funções
export default function Aluno(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:25, textAlignments:'justify', fontWeight:'italic'}}>
                Aluno : Lucas Rodrigues {"\n"}
                Idade : 22 {"\n"}
                Cidade: Maracanaú {"\n"}
                Curso: Design Digital {"\n"}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffabaf',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });