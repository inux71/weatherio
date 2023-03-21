import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function WeatherDetail({ icon, detail, isContrasModeEnabled }) {
  const theme = useTheme();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {icon}
      <Text
        style={{
          color: isContrasModeEnabled
            ? theme.colors.tertiaryContainer
            : theme.colors.onSurface,
          fontWeight: isContrasModeEnabled ? "bold" : "normal",
        }}
      >
        {detail}
      </Text>
    </View>
  );
}
