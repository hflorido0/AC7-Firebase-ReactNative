import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './src/view/Home';
import Login from './src/view/Login';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyB8IG1J-PTjs3s5Bc9xTTL4V5s0ZehuYrE",
  authDomain: "ac7-firebase-reactnative.firebaseapp.com",
  projectId: "ac7-firebase-reactnative",
  storageBucket: "ac7-firebase-reactnative.appspot.com",
  messagingSenderId: "4788826254",
  appId: "1:4788826254:web:1a3098f05b0579b19f99df",
  measurementId: "G-M799C2KFD1"
};
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
/*


// Initialize Firebase



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}*/
  
const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}