import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput, Modal } from "react-native";
import { styles } from "./Style/StyleSheet";

export default function App() {
  const [name, setName] = useState();
  const [text, setText] = useEffect();

  useEffect(()=> {
    if (text.length === 28) {
      alert('Atenção', 'Texto já atingiu 10 caracteres')
    }
  }, [text]);

  changeTxt = (text) => {
    setText(`Seja bem-vindo, ${text}.`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        onChangeText={changeTxt}
        maxLength={15}
      />

      <Text>{text}</Text>
    </View>

    // const [count, setCount] = useState(0);

    // incrementCount = () => {
    //   setCount(count + 1);
    // };

    // decrementCount = () => {
    //   setCount(count - 1);
    // };

    /* <Text>Contador: {count}</Text> */
    /* <Button title="Increment" onPress={incrementCount} />
      <Button title="Decrement" onPress={decrementCount} /> */
  );
}
