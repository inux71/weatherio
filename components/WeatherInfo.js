import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import WeatherDetail from "./WeatherDetail";

export default function WeatherInfo({ info }) {
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
    0: { description: "Clear sky", icon: "weather-sunny" },
    1: { description: "Mainly clear", icon: "weather-sunny" },
    2: { description: "Partly cloudy", icon: "weather-partly-cloudy" },
    3: { description: "Overcast", icon: "weather-cloudy" },
    45: { description: "Fog", icon: "weather-fog" },
    48: { description: "Depositing rime fog", icon: "weather-fog" },
    51: { description: "Drizzle: Light", icon: "weather-rainy" },
    53: { description: "Drizzle: Moderate", icon: "weather-rainy" },
    55: { description: "Drizzle: Dense intensity", icon: "weather-rainy" },
    56: { description: "Freezing Drizzle: Light", icon: "weather-rainy" },
    57: {
      description: "Freezing Drizzle: Dense intensity",
      icon: "weather-rainy",
    },
    61: { description: "Rain: Slight", icon: "weather-rainy" },
    63: { description: "Rain: Moderate", icon: "weather-rainy" },
    65: { description: "Rain: Heavy intensity", icon: "weather-rainy" },
    66: { description: "Freezing Rain: Light", icon: "weather-rainy" },
    67: {
      description: "Freezing Rain: Heavy intensity",
      icon: "weather-rainy",
    },
    71: { description: "Snow fall: Slight", icon: "weather-snowy" },
    73: { description: "Snow fall: Moderate", icon: "weather-snowy" },
    75: {
      description: "Snow fall: Heavy intensity",
      icon: "weather-snowy-heavy",
    },
    77: { description: "Snow grains", icon: "weather-hail" },
    80: { description: "Rain showers: Slight", icon: "weather-rainy" },
    81: { description: "Rain showers: Moderate", icon: "weather-pouring" },
    82: { description: "Rain showers: Violent", icon: "weather-pouring" },
    85: { description: "Snow showers slight", icon: "weather-snowy" },
    86: { description: "Snow showers Heavy", icon: "weather-snowy-heavy" },
    95: {
      description: "Thunderstorm: Slight or moderate",
      icon: "weather-lightning",
    },
    96: { description: "Thunderstorm with slight", icon: "weather-lightning" },
    99: {
      description: "Thunderstorm with Heavy hail",
      icon: "weather-lightning",
    },
  };

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
        <WeatherDetail
          icon={<Icon name="clock-outline" size={32} />}
          detail={`${hour}:${minute}`}
        />
        <WeatherDetail
          icon={<Icon name="calendar" size={32} />}
          detail={new Intl.DateTimeFormat(["ban", "id"]).format(date)}
        />
      </View>

      <Icon
        name={descriptions[info?.daily?.weathercode].icon ?? ""}
        size={64}
      />

      <Text
        style={{
          fontSize: 42,
        }}
      >
        {info?.current_weather?.temperature ?? ""}&deg;C
      </Text>

      <Text>{descriptions[info?.daily?.weathercode].description ?? ""}</Text>

      <View style={styles.horizontalView}>
        <WeatherDetail
          icon={<Icon name="weather-sunset-up" size={32} />}
          detail={getTimeFromISO(info?.daily?.sunrise[0] ?? "")}
        />
        <WeatherDetail
          icon={<Icon name="car-brake-low-pressure" size={32} />}
          detail={`${info?.hourly?.surface_pressure[hour - 1] ?? ""} hPa`}
        />
        <WeatherDetail
          icon={<Icon name="weather-sunset-down" size={32} />}
          detail={getTimeFromISO(info?.daily?.sunset[0] ?? "")}
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
    padding: 20,
  },
});
