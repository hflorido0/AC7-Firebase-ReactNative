import {StyleSheet} from "react-native";
import { Card } from "react-native-paper";

export const commons = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 260,
        height: 50,
    },
    label: {
        padding: 10,
    },
    button: {
        margin: 10,
    },
    card: {
        padding: 30,
        margin: 30,
    }
});