import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput, Modal } from "react-native";
import { styles } from "./Style/StyleSheet";

export default function App() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (text.length === 28) {
      alert("Atenção! O Texto já atingiu 10 caracteres");
    }
  }, [text]);

  // Frase
  changeTxt = (text) => {
    setText(`Seja bem-vindo, ${text}.`);
  };

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <View style={styles.container}>
      {/* Caixa de texto para colocar o nome, com limitação de caracteres. */}
      <TextInput
        placeholder="Type your name"
        style={styles.input}
        onChangeText={changeTxt}
        maxLength={15}
      />

      <Text>{text}</Text>

      <Button title="Open modal" onPress={() => visModal(true)} />
      {/* true or false*/}
      <Modal transparent={true} animationType="fade" visible={visible}></Modal>
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
