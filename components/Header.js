import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Switch, Text, useTheme } from "react-native-paper";

export default function Header() {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const theme = useTheme();

    return (
        <Appbar.Header style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <Text style={styles.textStyle}>Gliwice</Text>
            <View style={{
                display: "flex",
                flexDirection:"row",
                alignItems: "center",
                gap: 5
            }}>
                <Text style={styles.textStyle}>a</Text>     
                <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)} />
                <Text style={styles.textStyle}>A</Text>
            </View>
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});
