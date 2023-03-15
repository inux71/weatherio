import { ScrollView, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Hints({ cities, onPress }) {
  return (
    <ScrollView
      style={{
        maxHeight: cities.length > 0 ? 100 : 0,
        overflow: "hidden",
        marginBottom: 20,
      }}
    >
      {cities.map((city, key) => {
        return (
          <Button key={key} type="text" onPress={() => onPress(city)}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text>{city.name}</Text>
              <Text>{city.country_code}</Text>
            </View>
          </Button>
        );
      })}
    </ScrollView>
  );
}
