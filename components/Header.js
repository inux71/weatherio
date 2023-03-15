import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Switch, Text } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Header({ city }) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  return (
    <Appbar.Header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Text style={styles.textStyle}>{city}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Icon name="brightness-5" size={20} />
        <Switch
          value={isSwitchOn}
          onValueChange={() => setIsSwitchOn(!isSwitchOn)}
        />
        <Icon name="brightness-7" size={20} />
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});
