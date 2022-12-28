import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App Executed");


  let x = 1;

  


  return (
    <View style={styles.container}>
      <Text>
        I need to get to the tutorial pretty quick and finish it before 31st
        decebmer 2022.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
