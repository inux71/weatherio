import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import Header from './components/Header';
import Hints from './components/Hints';
import WeatherInfo from './components/WeatherInfo';

export default function App() {
  const mockCities = [
    'Gorzyczki',
    'Gliwice',
    'Gorzyce',
    'Gorzów Wielkopolski',
    'Rydułtowy'
  ]

  const [searchedCity, setSearchedCity] = useState('');
  const [city, setCity] = useState(mockCities[0]);
  const [pickedCities, setPickedCities] = useState([]);

  return (
    <>
      <Header city={city} />

      <Searchbar placeholder='miejscowość'
        value={searchedCity} 
        style={{
          backgroundColor: 'transparent'
        }} 
        onChangeText={(text) => setSearchedCity(text)} 
        onSubmitEditing={() => {
          if (searchedCity === '') {
            return;
          }

          setPickedCities(mockCities.filter(c => c.toLowerCase().startsWith(searchedCity.toLowerCase())));
        }} 
        onClearIconPress={() => setPickedCities([])} />
        
      <Hints cities={pickedCities} 
        setCityCallback={(city) => setCity(city)} 
        setPickedCitiesCallback={(picked) => setPickedCities(picked)} 
        setSearchedCityCallback={(searched) => setSearchedCity(searched)} />
      
      <WeatherInfo temperature={27} 
        description='clear sky'
        sunrise='5:46'
        sunset='21:01'
        pressure={1021} />
    </>
  );
}
