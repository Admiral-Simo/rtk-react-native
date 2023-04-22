import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer, selectPlayersCount } from "../../app/features/orderSlice";
import {colors} from '../../utils/constants'

const AddItemModal = ({ close }) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 top-0 z-10">
      <View className="w-full h-full items-center justify-center px-5">
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={close}
          className="absolute top-0 right-0 left-0 bottom-0 bg-gray-500 opacity-50"
        />
        <Modal close={close} />
      </View>
    </View>
  );
};

const Modal = ({close}) => {
  const playersCount = useSelector(selectPlayersCount);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name) {
      dispatch(addPlayer({name, color: colors[playersCount]}));
      close();
    }
  };

  return (
    <View className="bg-white w-full rounded-lg p-2">
      <View className="flex-row items-center">
        <Text>Name : </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          className="flex-1 ml-3 bg-pink-950 text-white rounded-lg px-1 h-10"
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-green-400 p-3 mt-2 rounded-lg items-center justify-center"
      >
        <Text className="text-white font-bold">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItemModal;
