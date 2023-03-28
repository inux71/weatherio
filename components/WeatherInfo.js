import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import WeatherDetail from "./WeatherDetail";

export default function WeatherInfo({ info, isContrastModeEnabled }) {
  function getCorrectFormat(d) {
    return d < 10 ? "0" + d : d;
  }

  function getTimeFromISO(iso) {
    if (iso === "") {
      return "";
    }

    const l = iso.length;

    return iso.substring(l - 5);
  }

  const date = new Date();
  const hour = getCorrectFormat(date.getHours());
  const minute = getCorrectFormat(date.getMinutes());

  const descriptions = {
    0: { description: "Bezchmurnie", icon: "weather-sunny" },
    1: { description: "Przeważnie bezchmurnie", icon: "weather-sunny" },
    2: { description: "Częściowe zachmurzenie", icon: "weather-partly-cloudy" },
    3: { description: "Pochmurno", icon: "weather-cloudy" },
    45: { description: "Mgła", icon: "weather-fog" },
    48: { description: "Osadzanie się mgły szronowej", icon: "weather-fog" },
    51: { description: "Mżawka: Lekka", icon: "weather-rainy" },
    53: { description: "Mżawka: Umiarkowana", icon: "weather-rainy" },
    55: { description: "Mżawka: Gęsta", icon: "weather-rainy" },
    56: { description: "Marznąca mżawka: Lekka", icon: "weather-rainy" },
    57: {
      description: "Marznąca mżawka: Gęsta",
      icon: "weather-rainy",
    },
    61: { description: "Deszcz: Lekki", icon: "weather-rainy" },
    63: { description: "Deszcz: Umiarkowany", icon: "weather-rainy" },
    65: { description: "Deszcz: Gwałtowny", icon: "weather-rainy" },
    66: { description: "Marznący deszcz: Lekki", icon: "weather-rainy" },
    67: {
      description: "Marznący deszcz: Gwałtowny",
      icon: "weather-rainy",
    },
    71: { description: "Opady śniegu: Lekkie", icon: "weather-snowy" },
    73: { description: "Opady śniegu: Umiarkowane", icon: "weather-snowy" },
    75: {
      description: "Opady śniegu: Gwałtowne",
      icon: "weather-snowy-heavy",
    },
    77: { description: "Grad", icon: "weather-hail" },
    80: {
      description: "Przelotne opady deszczu: niewielkie",
      icon: "weather-rainy",
    },
    81: {
      description: "Przelotne opady deszczu: Umiarkowane",
      icon: "weather-pouring",
    },
    82: {
      description: "Przelotne opady deszczu: Gwałtowne",
      icon: "weather-pouring",
    },
    85: { description: "Przelotne opady śniegu", icon: "weather-snowy" },
    86: { description: "Przelotne opady śniegu", icon: "weather-snowy-heavy" },
    95: {
      description: "Burza: Słaba lub umiarkowana",
      icon: "weather-lightning",
    },
    96: { description: "Burza z piorunami", icon: "weather-lightning" },
    99: {
      description: "Burza z ciężkim gradem",
      icon: "weather-lightning",
    },
  };

  const theme = useTheme();

  return info == null ? (
    <></>
  ) : (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.horizontalView}>
        <WeatherDetail // time information
          icon={
            <Icon
              name="clock-outline"
              size={32}
              style={{
                color: isContrastModeEnabled
                  ? theme.colors.tertiaryContainer
                  : theme.colors.onSurface,
              }}
            />
          }
          detail={
            isContrastModeEnabled
              ? `Czas: ${hour}:${minute}`
              : `${hour}:${minute}`
          }
          isContrasModeEnabled={isContrastModeEnabled}
        />
        <WeatherDetail // date information
          icon={
            <Icon
              name="calendar"
              size={32}
              style={{
                color: isContrastModeEnabled
                  ? theme.colors.tertiaryContainer
                  : theme.colors.onSurface,
              }}
            />
          }
          detail={
            isContrastModeEnabled
              ? `Data: ${new Intl.DateTimeFormat(["ban", "id"]).format(date)}`
              : new Intl.DateTimeFormat(["ban", "id"]).format(date)
          }
          isContrasModeEnabled={isContrastModeEnabled}
        />
      </View>

      <Icon
        name={descriptions[info?.current_weather?.weathercode].icon ?? ""}
        size={64}
        style={{
          color: isContrastModeEnabled
            ? theme.colors.tertiaryContainer
            : theme.colors.onSurface,
        }}
      />

      <Text // temperature information
        style={{
          fontSize: 42,
          color: isContrastModeEnabled
            ? theme.colors.tertiaryContainer
            : theme.colors.onSurface,
          fontWeight: isContrastModeEnabled ? "bold" : "normal",
        }}
      >
        {info?.current_weather?.temperature ?? ""}&deg;C
      </Text>

      <Text // the weather description
        style={{
          marginBottom: 50,
          color: isContrastModeEnabled
            ? theme.colors.tertiaryContainer
            : theme.colors.onSurface,
          fontWeight: isContrastModeEnabled ? "bold" : "normal",
          fontSize: isContrastModeEnabled ? 28 : 14,
        }}
      >
        {descriptions[info?.current_weather?.weathercode].description ?? ""}
      </Text>

      <View style={styles.horizontalView}>
        <WeatherDetail // sunrise time information
          icon={
            <Icon
              name="weather-sunset-up"
              size={32}
              style={{
                color: isContrastModeEnabled
                  ? theme.colors.tertiaryContainer
                  : theme.colors.onSurface,
              }}
            />
          }
          detail={
            isContrastModeEnabled
              ? `Wschód: ${getTimeFromISO(info?.daily?.sunrise[0] ?? "")}`
              : getTimeFromISO(info?.daily?.sunrise[0] ?? "")
          }
          isContrasModeEnabled={isContrastModeEnabled}
        />
        <WeatherDetail // pressure information
          icon={
            <Icon
              name="car-brake-low-pressure"
              size={32}
              style={{
                color: isContrastModeEnabled
                  ? theme.colors.tertiaryContainer
                  : theme.colors.onSurface,
              }}
            />
          }
          detail={
            isContrastModeEnabled
              ? `Ciśnienie: ${
                  info?.hourly?.surface_pressure[hour - 1] ?? ""
                } hPa`
              : `${info?.hourly?.surface_pressure[hour - 1] ?? ""} hPa`
          }
          isContrasModeEnabled={isContrastModeEnabled}
        />
        <WeatherDetail // sunset information
          icon={
            <Icon
              name="weather-sunset-down"
              size={32}
              style={{
                color: isContrastModeEnabled
                  ? theme.colors.tertiaryContainer
                  : theme.colors.onSurface,
              }}
            />
          }
          detail={
            isContrastModeEnabled
              ? `Zachód: ${getTimeFromISO(info?.daily?.sunset[0] ?? "")}`
              : getTimeFromISO(info?.daily?.sunset[0] ?? "")
          }
          isContrasModeEnabled={isContrastModeEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    padding: 10,
  },
});
