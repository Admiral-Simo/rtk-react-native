import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
} from "react-native";
import { Provider } from "react-redux";
import store from "./app/store";
import Main from "./components/Main";

export default function App() {
  return (
    <Provider store={store}>
        <Main />
        <StatusBar style="auto" />
    </Provider>
  );
}
