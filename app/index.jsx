import { LinearGradient } from "expo-linear-gradient";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BalanceCard } from "./components/BalanceCard";
import ActionButton from "./components/ActionButton";
import Transitions from "./components/Transitions";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,0,8)", "transparent"]}
        style={styles.background}
      />
      <View>
        <BalanceCard />
        <View style={styles.action}>
          <ActionButton
            label="Transfer"
            path={"/transfer"}
            color="#ff009d"
            icon="compare-arrows"
          />
          <ActionButton
            color="#0e9ce2"
            icon="qr-code-2"
            label="Scan"
            path={"/scan"}
          />
          <ActionButton
            color="#7b48f4"
            icon="attach-money"
            label="Fx Rate"
            path={"/fxrate"}
          />
          <ActionButton
            color="#ff379e"
            icon="history"
            label="History"
            path={"/history"}
          />
          /
        </View>

        <View style={styles.moreActionBar}></View>
        <View style={styles.transitions}>
          <Text style={styles.text.label}>Recent Transition</Text>
          <Transitions />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    left: 0,
    right: 0,
    top: 100,
    height: 300,
    position: "absolute",
  },
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#6d25e5",
  },
  action: {
    paddingTop: 30,
    paddingRight: 25,
    paddingBottom: 25,
    paddingLeft: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moreActionBar: {
    width: 100,
    height: 4,
    backgroundColor: "#ddd",
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 8,
  },
  transitions: {
    gap: 10,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#f1f1f1",
  },
  text: {
    label: {
      fontWeight: "bold",
      color: "#aaa",
    },
  },
});
