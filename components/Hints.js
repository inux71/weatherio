import { ScrollView, StyleSheet, Text, View } from "react-native";
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
            justifyContent: "flex-start",
            alignItems: "flex-start",
            margin: 5,
            backgroundColor: isContrastModeEnabled
              ? theme.colors.tertiaryContainer
              : theme.colors.surface,
          }}
          key={key}
          onPress={() => onPress(city)}
        >
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
        </Button>
      ))}
    </ScrollView>
  );
}
