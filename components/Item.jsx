import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { removePlayer } from "../app/features/orderSlice";
import { MaterialIcons } from "@expo/vector-icons";

const Item = ({ name, color, i }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removePlayer(i));
  };

  return (
    <View className="flex-row px-5 py-3 mb-2 bg-white justify-between">
      <View className="flex-row items-center">
        <View
          className="p-3 rounded-full mr-3 relative"
          style={{ backgroundColor: color }}
        >
          <View className="left-0 right-0 bottom-0 top-0 absolute">
            <View className="justify-center items-center h-full w-full">
              <Text className="text-white font-bold">{i + 1}</Text>
            </View>
          </View>
        </View>
        <Text>{name}</Text>
      </View>
      <TouchableOpacity
        onPress={removeItem}
        className="rounded-lg p-2 bg-red-400"
      >
        <MaterialIcons name="delete" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Item;
