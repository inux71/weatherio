import React, { useState } from "react";
import { View } from "react-native";
import { Appbar, Switch, Text, useTheme } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Header({
  city,
  contrastMode,
  setIsContrastModeEnabledCallback,
}) {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: contrastMode ? theme.colors.tertiaryContainer : "",
      }}
      elevated={true}
    >
      <Text
        style={{
          fontSize: 20,
          maxWidth: "50%",
          overflow: "hidden",
          fontWeight: contrastMode ? "bold" : "normal",
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
          color={
            contrastMode
              ? theme.colors.onTertiaryContainer
              : theme.colors.onPrimaryContainer
          }
        />
        <Icon name="brightness-7" size={20} />
      </View>
    </Appbar.Header>
  );
}
