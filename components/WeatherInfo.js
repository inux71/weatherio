import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function WeatherInfo({info}) {
    function getCorrectFormat(d) {
        return d < 10 ? '0' + d : d;
    }

    function getTimeFromISO(iso) {
        if (iso === '') {
            return '';
        }

        const l = iso.length;

        return iso.substring(l - 5);
    }

    const date = new Date();
    const hour = getCorrectFormat(date.getHours());
    const minute = getCorrectFormat(date.getMinutes());

    const descriptions = {
        '0': 'Clear sky',
        '1': 'Mainly clear, partly cloudy, and overcast',
        '2': 'Mainly clear, partly cloudy, and overcast',
        '3': 'Mainly clear, partly cloudy, and overcast',
        '45': 'Fog and depositing rime fog',
        '48': 'Fog and depositing rime fog',
        '51': 'Drizzle: Light, moderate, and dense intensity', 
        '53': 'Drizzle: Light, moderate, and dense intensity', 
        '55': 'Drizzle: Light, moderate, and dense intensity',
        '56': 'Freezing Drizzle: Light and dense intensity', 
        '57': 'Freezing Drizzle: Light and dense intensity',
        '61': 'Rain: Slight, moderate and heavy intensity', 
        '63': 'Rain: Slight, moderate and heavy intensity', 
        '65': 'Rain: Slight, moderate and heavy intensity',
        '66': 'Freezing Rain: Light and heavy intensity', 
        '67': 'Freezing Rain: Light and heavy intensity',
        '71': 'Snow fall: Slight, moderate, and heavy intensity', 
        '73': 'Snow fall: Slight, moderate, and heavy intensity', 
        '75': 'Snow fall: Slight, moderate, and heavy intensity',
        '77': 'Snow grains',
        '80': 'Rain showers: Slight, moderate, and violent', 
        '81': 'Rain showers: Slight, moderate, and violent', 
        '82': 'Rain showers: Slight, moderate, and violent',
        '85': 'Snow showers slight and heavy', 
        '86': 'Snow showers slight and heavy',
        '95': 'Thunderstorm: Slight or moderate',
        '96': 'Thunderstorm with slight and heavy hail', 
        '99': 'Thunderstorm with slight and heavy hail'					
    }

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
            }}>{info?.current_weather?.temperature ?? ''}&deg;C</Text>

            <Text>{descriptions[info?.daily?.weathercode] ?? ''}</Text>

            <View style={styles.horizontalView}>
                <Text>{getTimeFromISO(info?.daily?.sunrise[0] ?? '')}</Text>
                <Text>{info?.hourly?.surface_pressure[hour - 1] ?? ''} hPa</Text>
                <Text>{getTimeFromISO(info?.daily?.sunset[0] ?? '')}</Text>
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
