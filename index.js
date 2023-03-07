import { registerRootComponent } from "expo";
import { Provider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "./App";

export default function Root() {
    return (
        <Provider>
            <App />
        </Provider>
    );
}

registerRootComponent(Root);
