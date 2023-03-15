import { Text, View } from "react-native";

export default function WeatherDetail({ icon, detail }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {icon}
      <Text>{detail}</Text>
    </View>
  );
}
