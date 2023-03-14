import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import Header from './components/Header';
import Hints from './components/Hints';
import WeatherInfo from './components/WeatherInfo';

export default function App() {
  function getCitiesFromAPI(city) {
    return fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=pl&count=5`)
      .then(response => response.json())
      .then(json => {
        return json.results;
      });
  }

  function getWeatherInfo(city) {
    return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true&hourly=surface_pressure&daily=weathercode,sunrise,sunset&forecast_days=1&timezone=${city.timezone}`)
      .then(response => response.json())
      .then(json => {
        return json;
      });
  }
  
  const [searchedCity, setSearchedCity] = useState('');
  const [city, setCity] = useState('');
  const [pickedCities, setPickedCities] = useState([]);
  const [info, setInfo] = useState(null)

  return (
    <>
      <Header city={city.name} />

      <Searchbar placeholder='miejscowość'
        value={searchedCity} 
        style={{
          backgroundColor: 'transparent'
        }} 
        onChangeText={(text) => setSearchedCity(text)} 
        onSubmitEditing={async () => {
          if (searchedCity === '') {
            return;
          }

          setPickedCities(await getCitiesFromAPI(searchedCity));
        }} 
        onClearIconPress={() => setPickedCities([])} />
        
      <Hints cities={pickedCities}
        onPress={async (city) => {
          setPickedCities([]);
          setCity(city);
          setSearchedCity('');
          setInfo(await getWeatherInfo(city));
        }} />
      
      <WeatherInfo info={info} />
    </>
  );
}
