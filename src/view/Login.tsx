import { useState } from "react";
import { View } from "react-native";
import { Button, Card, IconButton, Text, TextInput } from "react-native-paper";
import { commons } from "../css/Commons";
import LoginModel from "../model/Login";
import AwesomeAlert from "react-native-awesome-alerts";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = ({navigation}) => {
    const [login, setLogin] = useState(new LoginModel());
    const [showAlert, setShowAlert] = useState(false);
    const [alerText, setAlertText] = useState("ERROR!");

    const auth = getAuth();

    function handleEmail(value : string) {
        const newLogin = {...login, email: value};
        setLogin(newLogin);
    }

    function handlePassword (value : string) {
        const newLogin = {...login, password: value};
        setLogin(newLogin);
    }

    function hideAlert() {
        setShowAlert(false);
    }

    const createUser = () => {
        createUserWithEmailAndPassword(auth, login.email, login.password)
            .then((userCredential) => {
                // Usuario creado exitosamente
                const user = userCredential.user;
                console.log(user);
                navigation.navigate('Home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                setAlertText(error.code);
                setShowAlert(true);
            });
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, login.email, login.password)
            .then((userCredential) => {
                // Usuario ha iniciado sesión exitosamente
                const user = userCredential.user;
                console.log(user);
                navigation.navigate('Home');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(error);
                // Manejar errores aquí
                setAlertText(error.code);
                setShowAlert(true);
            });
    }

    return (
        <View style={commons.container}>
            <Card style={commons.card}>
                <Text style={commons.label}>Usuario:</Text>
                <TextInput 
                    style={commons.input}
                    value={login.email}
                    onChangeText={handleEmail}
                />
                <Text style={commons.label}>Password:</Text>
                <TextInput 
                    style={commons.input}
                    value={login.password}
                    onChangeText={handlePassword}
                    secureTextEntry={true}
                />
                <Button style={commons.button} icon="camera"
                    buttonColor="lightgreen" onPress={() => signIn()}>
                        Log In
                 </Button>
                <Button style={commons.button} icon="camera" 
                    buttonColor="lightblue" onPress={() => createUser()}>
                        Register
                </Button>
            </Card>
            <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="ERROR"
                    message={alerText}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={false}
                    cancelText="OK"
                    cancelButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        hideAlert();
                    }}
                />
        </View>
    );
}