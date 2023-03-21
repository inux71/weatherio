import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function Hints({ cities, onPress, isContrastModeEnabled }) {
  const theme = useTheme();

  return (
    <ScrollView
      style={{
        maxHeight: 65,
      }}
      horizontal={true}
    >
      {cities.map((city, key) => (
        <Button
          mode="elevated"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            margin: 5,
            backgroundColor: isContrastModeEnabled
              ? theme.colors.tertiaryContainer
              : theme.colors.surface,
          }}
          key={key}
          onPress={() => onPress(city)}
        >
          {Platform.OS === "ios" ? (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                {city.name}
              </Text>
              <Text>{city.country}</Text>
            </View>
          ) : (
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "left",
                color: isContrastModeEnabled
                  ? theme.colors.onTertiaryContainer
                  : theme.colors.onSurface,
              }}
            >
              {city.name}
            </Text>
          )}
        </Button>
      ))}
    </ScrollView>
  );
}
