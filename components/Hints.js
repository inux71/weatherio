import { ScrollView, View } from "react-native";
import { Button } from "react-native-paper";

export default function Hints({
    cities, 
    setPickedCitiesCallback, 
    setCityCallback, 
    setSearchedCityCallback
}) {
    return (
        <ScrollView style={{
            maxHeight: cities.length > 0 ? 100 : 0,
            overflow: 'hidden',
            marginBottom: 20
        }}> 
            {cities.map((city, key) => <Button key={key}
                type='text'
                onPress={() => {
                    setPickedCitiesCallback([]);
                    setCityCallback(city);
                    setSearchedCityCallback('');
            }}>{city}</Button>)}
        </ScrollView>
    );
}