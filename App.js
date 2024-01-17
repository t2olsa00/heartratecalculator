import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [yourAge, setAge] = useState('');
  const [minRate, setMinrate] = useState(0);
  const [maxRate, setMaxrate] = useState(0);

  function calculate() {
    const resultMin = (220-yourAge) * 0.65;
    const resultMax = (220-yourAge) * 0.85;
    setMinrate(resultMin);
    setMaxrate(resultMax);
  }

  return (
      <View style={styles.container}>
      <Text style={styles.field}>Your age:</Text>
      <TextInput style={styles.input} value={yourAge} placeholder='...' onChangeText={text => setAge(text)}
      keyboardType='decimal-pad' maxLength={3} textAlign={'center'}/>
      <Text style={styles.field}>Lowest heart rate:</Text>
      <Text style={styles.field}>{minRate.toFixed(0)}</Text>
      <Text style={styles.field}>Highest heart rate:</Text>
      <Text style={styles.field}>{maxRate.toFixed(0)}</Text>
      <Text>{''}</Text>
      <Button onPress={calculate} title="Calculate sports limits"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "gray",
    width: "10%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 1,
  },
  header: {

  },
});
