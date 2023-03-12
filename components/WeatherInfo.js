import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function WeatherInfo({temperature, description, sunrise, sunset, pressure}) {
    function getCorrectFormat(d) {
        return d < 10 ? '0' + d : d;
    }

    const date = new Date();
    const hour = getCorrectFormat(date.getHours());
    const minute = getCorrectFormat(date.getMinutes());

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={styles.horizontalView}>
                <Text>{hour}:{minute}</Text>
                <Text>{new Intl.DateTimeFormat(['ban', 'id']).format(date)}</Text>
            </View>

            <Text style={{
                fontSize: 42
            }}>{temperature}&deg;C</Text>

            <Text>{description}</Text>

            <View style={styles.horizontalView}>
                <Text>{sunrise}</Text>
                <Text>{pressure} hPa</Text>
                <Text>{sunset}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    horizontalView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch'
    }
});
