// import { StatusBar } from "expo-status-bar";
// import { useDimensions } from "@react-native-community/hooks";

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
  Alert,
  Platform,
  StatusBar,
  Dimensions
} from "react-native";
// import OrientationLocker from ' v     react-native-orientation-locker';


// export default function App() {
  // let x = 1;

  // console.log(Dimensions.get("screen"));

  // console.log(useDimensions());

  // const handlePress = () => {
  //   console.log("Key was pressed");
  // };

  // return (
    // <SafeAreaView style={styles.container }>
      {/* <Text>Hello World!</Text> */}
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

      {/* <Button title="Click me" color="orange" onPress={() => console.log("Button tapped")} /> */}
      {/* <Button title="Click me" color="orange" onPress={() => alert("Button tapped")} /> */}


      
      {/* Alert.alert("title", "message", [{text: "yes", onPress: function}, {text: "no", onPress: function}]) */}
      {/* <Button title="Click me" 
        color="orange" 
        onPress={() => Alert.alert("My Title", "My Message", [
          {text: "Yes", onPress: () => console.log("Yes")},
          {text: "No", onPress: () => console.log("No")}
        ])} 
      /> */}

       {/* Alert.alert("title", "message", call-back-function) - Alert.prompt() 0nly works on ios, not yet on android */} 
       {/* <Button title="Click me" 
        color="orange" 
        onPress={() => Alert.prompt("My Title", "My Message", text => console.log(text))
        } 
      /> */}

      {/* <StatusBar style="auto" /> */}

      // <View style={{ backgroundColor: "dodgerblue", width: 180, height: 70}}></View>
      // <View style={{ backgroundColor: "azure", width: "50%", height: 70}}></View>
    // </SafeAreaView>

  // );
// }

const containerStyle = { backgroundColor: "red"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    // paddingTop: Platform.OS === "android" ? 30 : 0, 
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});




export default function Flex() {
  return(
    <View style={{
      backgroundColor: "#ffffff",
      flex: 1
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 2
      }} />
      <View style={{
        backgroundColor: "gold",
        flex: 1
      }} />
      <View style={{
        backgroundColor: "tomato",
        flex: 1
      }} />
    </View>
  );
};
