import { ScrollView, View } from "react-native";
import { Button } from "react-native-paper";

export default function Hints({
    cities,
    onPress
}) {
    return (
        <ScrollView style={{
            maxHeight: cities.length > 0 ? 100 : 0,
            overflow: 'hidden',
            marginBottom: 20
        }}> 
            {cities.map((city, key) => <Button key={key}
                type='text'
                onPress={() => onPress(city)}>{city.name}</Button>)}
        </ScrollView>
    );
}