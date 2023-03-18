import React, { useState } from "react";
import { View } from "react-native";
import { Appbar, Switch, Text } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Header({
  city,
  contrastMode,
  setIsContrastModeEnabledCallback,
}) {
  return (
    <Appbar.Header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
      elevated={true}
    >
      <Text
        style={{
          fontSize: 20,
          maxWidth: "50%",
          overflow: "hidden",
        }}
        numberOfLines={1}
      >
        {city}
      </Text>
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
          value={contrastMode}
          onValueChange={() => {
            setIsContrastModeEnabledCallback(contrastMode);
          }}
        />
        <Icon name="brightness-7" size={20} />
      </View>
    </Appbar.Header>
  );
}
