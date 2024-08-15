import { MaterialIcons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Scan = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          We need your permission to show the Camera
        </Text>
        <View style={{ width: 250, marginTop: 20, alignSelf: "center" }}>
          <Button onPress={requestPermission} title="grand permission" />
        </View>
      </View>
    );
  }
  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={(result) => {
          console.log(result.data);
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleCameraFacing} style={styles.button}>
            <MaterialIcons name="cameraswitch" size={48} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
