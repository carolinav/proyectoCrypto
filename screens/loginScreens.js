import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';


import LoginForm from '../screens/account/LoginForm';
import EstrategiasCreate from './EstrategiasCreate';


const LoginScreens = () => {

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });

  return (
    <View>
        <Text style={{fontSize: 45, textAlign: "center", marginTop: "5%", color: '#1DB873', marginTop: 95, fontWeight:'600', fontFamily: 'ABeeZee_400Regular',}}>Logueate</Text>
        <LoginForm />
        <Text
        onPress={() => navigation.navigate("ClaveScreens")}
        style={{
          color: 'green',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 42,
          fontFamily: 'ABeeZee_400Regular',
        }}
        >Olvidaste tu contraseña? Puedes recuperarla!</Text>

        <Text
        onPress={() => navigation.navigate("RegisterScreens")}
        style={{
          color: '#017BFE',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 16,
          fontFamily: 'ABeeZee_400Regular',
        }}
        >No tienes una cuenta? Registrate!</Text>
    </View>
  );
}

export default LoginScreens;