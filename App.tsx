import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Login } from "@src/screens/login/Login";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Login />
    </GestureHandlerRootView>
  );
};

export default App;
