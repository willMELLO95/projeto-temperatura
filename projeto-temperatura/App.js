import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
    <Text> APLICATIVO TEMPERATURA </Text>
    <TextInput placeholder = "digite uma tempoeratura em celsius" keyboardType = "numeric"/>

    <TouchableOpacity>

    <Text> Calcular </Text>
    </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor : "blue"
  },
});
