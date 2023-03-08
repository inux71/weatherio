import { Button } from "react-native-paper";

export default function Hints({cities, setPickedCitiesCallback, setCityCallback, setSearchedCityCallback}) {
    return cities.map((city, key) => <Button key={key}
        type='text'
        onPress={() => {
            setPickedCitiesCallback([]);
            setCityCallback(city);
            setSearchedCityCallback('');
        }}>{city}</Button>);
}