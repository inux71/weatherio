import { useState } from "react";
import { View } from "react-native";
import { Searchbar, useTheme } from "react-native-paper";
import Header from "./components/Header";
import Hints from "./components/Hints";
import WeatherInfo from "./components/WeatherInfo";

export default function App() {
  function getCitiesFromAPI(city) {
    return fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=pl&count=10`
    )
      .then((response) => response.json())
      .then((json) => {
        return json.results;
      });
  }

  function getWeatherInfo(city) {
    return fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true&hourly=surface_pressure&daily=weathercode,sunrise,sunset&forecast_days=1&timezone=${city.timezone}`
    )
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

  const [isContrastModeEnabled, setIsContrastModeEnabled] = useState(false);
  const [searchedCity, setSearchedCity] = useState("");
  const [city, setCity] = useState("");
  const [pickedCities, setPickedCities] = useState([]);
  const [info, setInfo] = useState(null);

  const theme = useTheme();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: isContrastModeEnabled
          ? theme.colors.onTertiaryContainer
          : theme.colors.onPrimary,
      }}
    >
      <Header
        city={city.name}
        contrastMode={isContrastModeEnabled}
        setIsContrastModeEnabledCallback={() =>
          setIsContrastModeEnabled(!isContrastModeEnabled)
        }
      />

      <Searchbar
        placeholderTextColor={
          isContrastModeEnabled
            ? theme.colors.tertiaryContainer
            : theme.colors.onSurface
        }
        inputStyle={{
          color: isContrastModeEnabled
            ? theme.colors.tertiaryContainer
            : theme.colors.onSurface,
        }}
        iconColor={
          isContrastModeEnabled
            ? theme.colors.tertiaryContainer
            : theme.colors.onSurface
        }
        placeholder="miejscowość"
        value={searchedCity}
        style={{
          backgroundColor: "transparent",
          borderWidth: isContrastModeEnabled ? 2 : 0,
          borderColor: theme.colors.tertiaryContainer,
          marginVertical: 5,
        }}
        onChangeText={(text) => setSearchedCity(text)}
        onSubmitEditing={async () => {
          if (searchedCity === "") {
            return;
          }

          setPickedCities(await getCitiesFromAPI(searchedCity));
        }}
      />

      <Hints
        isContrastModeEnabled={isContrastModeEnabled}
        cities={pickedCities}
        onPress={async (city) => {
          setCity(city);
          setSearchedCity("");
          setInfo(await getWeatherInfo(city));
        }}
      />

      <WeatherInfo info={info} isContrastModeEnabled={isContrastModeEnabled} />
    </View>
  );
}
