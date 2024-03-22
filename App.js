import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput, Modal } from "react-native";
import { styles } from "./Style/StyleSheet";

export default function App() {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState();

  // incrementCount = () => {
  //   setCount(count + 1);
  // };

  // decrementCount = () => {
  //   setCount(count - 1);
  // };

  changeTxt = (name) => {
    setName(`Seja bem-vindo, ${name}.`);
  };

  return (
    <View style={styles.container}>
      {/* <Text>Contador: {count}</Text> */}
      {/* <Button title="Increment" onPress={incrementCount} />
      <Button title="Decrement" onPress={decrementCount} /> */}
      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        onChangeText={changeTxt}
        maxLength={10}
      />
      <Text>{name}</Text>
    </View>
  );
}
