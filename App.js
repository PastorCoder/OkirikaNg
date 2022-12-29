import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  console.log("App Executed");


  // let x = 1;


  const handlePress = () => {
    console.log("Key was pressed");
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Hello World!
      </Text>
      {/* <Image source={require("./assets/favicon.png")}/> */}
      <Image 
      blurRadius={10}
      fadeDuration={1000} //doesnt work on ios
      source={{
        width: 250,
        height: 300,
        uri: "https://picsum.photos/200/300"
      }}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
