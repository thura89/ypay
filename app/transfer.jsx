import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default Transfer = () => {
  const toInput = useRef();
  const toAmount = useRef();
  const toNote = useRef();

  const [available, setAvailable] = useState("12,543.21");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        ref={toInput}
        placeholder="to"
        value={to}
        onChangeText={setTo}
      />
      <TextInput
        style={styles.input}
        ref={toAmount}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
      />
      <TouchableOpacity
        style={styles.inputDes}
        onPress={() => setAmount(available)}
      >
        <Text>Balance</Text>
        <Text style={styles.balance}>{available}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        ref={toNote}
        placeholder="Note"
        value={note}
        onChangeText={setNote}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.bottomText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    padding: 20,
    marginTop: 10,
  },
  input: {
    flexGrow: 1,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  inputDes: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  balance: {
    color: "#0e9ce2",
    textDecorationLine: "underline",
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#6d25e5",
  },
  bottomText: {
    fontSize: 20,
    color: "white",
  },
});
