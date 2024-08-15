import { MaterialIcons } from "@expo/vector-icons";
import { useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const api = "https://api.frankfurter.app/latest?from=USD";
const fxrate = () => {
  const amountInput = useRef();
  const [amount, setAmount] = useState("");

  const { data, isLoading, isError, error } = useQuery(
    "fxrate",
    async (params) => {
      const res = await fetch(api);
      return res.json();
    }
  );

  if (isError) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const convert = (e) => {
    const usd = amount > 0 ? amount : 1;
    if (!data.rates[code]) {
      return 0;
    }
    return usd * data.rates[code];
  };

  return (
    <View style={{ padding: 20 }}>
      <View style={styles.item}>
        <MaterialIcons name="attach_money" size={24} color="#0e9ce2" />
        <TextInput
          style={styles.input}
          placeholder="1 USD"
          value={amount}
          onChangeText={setAmount}
          ref={amountInput}
        />
      </View>
      <View style={styles.item}>
        <MaterialIcons name="euro" size={24} color="#0e9ce2" />
        <Text style={styles.result}>{convert("EUR")} EUR</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="currency-pound" size={24} color="#0e9ce2" />
        <Text style={styles.result}>{convert("GBP")} GBP</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="currency-yen" size={24} color="#0e9ce2" />
        <Text style={styles.result}>{convert("JPY")} JPY</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="currency-yuan" size={24} color="#0e9ce2" />
        <Text style={styles.result}>{convert("CNY")} CNY</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="currency-rupee" size={24} color="#0e9ce2" />
        <Text style={styles.result}>{convert("INR")} INR</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="currency-exchange" size={24} color="#0e9ce2" />
        <Text style={styles.result}>{convert("CAD")} CAD</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="currency-exchange" size={24} color="#0e9ce2" />
        <Text style={styles.result}>{convert("AUD")} AUD</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="currency-exchange" size={24} color="#0e9ce2" />
        <Text style={styles.result}>{convert("SGD")} SGD</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcons name="currency-exchange" size={24} color="#0e9ce2" />
        <Text style={styles.result}>{convert("THB")} THB</Text>
      </View>
    </View>
  );
};

export default fxrate;

const styles = StyleSheet.create({
  input: {
    flexGrow: 1,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  item: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  result: {
    fontSize: 18,
  },
});
