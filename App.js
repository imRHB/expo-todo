import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TodoScreen from "./src/screen/TodoScreen";

export default function App() {
    return (
        <SafeAreaView>
            <View style={{ margin: 20 }}>
                <TodoScreen />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
