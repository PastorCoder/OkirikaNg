import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
} from "react-native";

export default function App() {
  // let x = 1;

  const handlePress = () => {
    console.log("Key was pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      {/* <Image source={require("./assets/favicon.png")}/> */}
      {/* <TouchableWithoutFeedback onPress={() => console.log("Image Tapped")}>
        <Image
          blurRadius={10}
          fadeDuration={1000} //doesnt work on ios
          source={{
            width: 250,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback> */}
      {/* <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image
          // blurRadius={10}
          fadeDuration={1000} //doesnt work on ios
          source={{
            width: 250,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity> */}

      {/* <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image
          // blurRadius={10}
          fadeDuration={1000} //doesnt work on ios
          source={{
            width: 250,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight> */}

      {/* <TouchableNativeFeedback>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback> */}

      <Button title="Click me" color="orange" onPress={() => console.log("Button tapped")} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
