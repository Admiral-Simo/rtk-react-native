import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayers, shufflePlayers } from "../app/features/orderSlice";
import Icons from "@expo/vector-icons/Ionicons";
import Item from "./Item";
import { StatusBar } from "react-native";
import { useState } from "react";
import { Pressable } from "react-native";
import AddItemModal from "./Modal/AddItemModal";

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(selectPlayers);

  console.log(data);
  return (
    <View
      className="flex-1 bg-yellow-400 px-3"
      style={{ paddingTop: StatusBar.currentHeight + 20 }}
    >
      {/* modal */}
      {modalVisible && <AddItemModal close={() => setModalVisible(false)} />}
      {/* Items */}
      <ScrollView>
        {data?.map((item, i) => (
          <Item key={i} {...item} i={i} />
        ))}
        <View className="mb-32" />
      </ScrollView>
      {/* shuffle */}
      <TouchableOpacity
        className="absolute bottom-3 left-3 rounded-lg py-3 px-10 bg-purple-500"
        onPress={() => dispatch(shufflePlayers())}
      >
        <Text className="font-bold text-3xl text-white">Shuffle</Text>
      </TouchableOpacity>
      {/* add item */}
      <TouchableOpacity
        className="absolute bottom-3 right-3 rounded-lg py-3 px-3 bg-purple-500"
        onPress={() => setModalVisible((prev) => !prev)}
      >
        <Icons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Main;
