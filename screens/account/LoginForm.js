import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';


import EstrategiasCreate from '../EstrategiasCreate';

export default function LoginForm() {

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });

  return (
    <View>
       <TextInput
            placeholder='Ingresa tu Email...'
            style={{height: 40, fontSize: 20, marginTop: 30, marginLeft: 'auto', marginRight: 'auto', width: "90%", paddingLeft: 10, borderWidth: 1, borderColor: '#dbdbdb', paddingBottom: 16, paddingTop: 12, height: 52, fontFamily: 'ABeeZee_400Regular',}}  
        />
        <TextInput
            placeholder='Ingresa tu Contraseña...'
            style={{height: 40, fontSize: 20, marginTop: 30, marginLeft: 'auto', marginRight: 'auto', width: "90%", paddingLeft: 10, borderWidth: 1, borderColor: '#dbdbdb', paddingBottom: 16, paddingTop: 12, height: 52, fontFamily: 'ABeeZee_400Regular',}}
            secureTextEntry
        />
        <TouchableOpacity
        onPress={() => navigation.navigate("EstrategiasCreate")}
        style={{
          backgroundColor: '#4543D3',
          padding: 10,
          paddingTop: 22,
          fontFamily: 'ABeeZee_400Regular',
          paddingBottom: 22,
          marginTop: '20%',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          shadowColor: '#121111',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 20,
          shadowColor: '#121111',
        }}
        >
          <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: 'white',
            letterSpacing: 1,
            fontFamily: 'ABeeZee_400Regular',
          }}
          >Ingresar a tu cuenta</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({});