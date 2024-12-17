import { View,Button,StyleSheet, TextInput } from "react-native";
import * as Speech from 'expo-speech';
import { styles } from "@/assets/styles/globalstyles";
import { useState } from "react";



export default function TabTwoScreen() {
  const [text,setText] = useState<string>('');
  const speak = () => {
    Speech.speak(text);
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}  onChangeText={(value)=>setText(value)}/>
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}


