import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Hints({ cities, onPress }) {
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
