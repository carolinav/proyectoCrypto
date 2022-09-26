import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterForm from '../screens/account/RegisterForm';
import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';


import LoginScreens from './loginScreens';

const RegisterScreens = () => {

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });

  return (
    <View>
        <Text style={{fontSize: 55, textAlign: "center", marginTop: "5%", color: '#1DB873', marginTop: 95, fontWeight: '600', fontFamily: 'ABeeZee_400Regular',}}>Registrate</Text>
        <RegisterForm />
        <Text
        onPress={() => navigation.navigate("Login")}
        style={{
          color: '#017BFE',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
          fontFamily: 'ABeeZee_400Regular',
        }}
        >Ya tienes una cuenta? Logueate!</Text>
    </View>
  );
}



export default RegisterScreens;

//#4543D3