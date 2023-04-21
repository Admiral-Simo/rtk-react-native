import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { useGetRandomBetweenQuery } from "./app/apis/randomApi";

const Main = () => {
  const [min, setMin] = useState('0')
  const [max, setMax] = useState('5')
  const [count, setCount] = useState('6')
  const {data} = useGetRandomBetweenQuery({min, max, count: count ? count : 1});

  console.log(data);
  return (
    <View>
      {data?.map((item, i) => (
        <Text key={i}>{item}</Text>
      ))}
      <Text>something</Text>
      <TextInput placeholder='min' value={min} onChangeText={setMin} />
      <TextInput placeholder='max' value={max} onChangeText={setMax} />
      <TextInput placeholder='max' value={count} onChangeText={setCount} />
    </View>
  );
};
export default Main;
