import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/features/home/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
