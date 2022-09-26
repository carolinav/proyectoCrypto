import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';


export default function RegisterForm() {

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
        <TextInput
            placeholder='Confirma tu Contraseña...'
            style={{height: 40, fontSize: 20, marginTop: 30, marginLeft: 'auto', marginRight: 'auto', width: "90%", paddingLeft: 10, borderWidth: 1, borderColor: '#dbdbdb', paddingBottom: 16, paddingTop: 12, height: 52, fontFamily: 'ABeeZee_400Regular',}}
            secureTextEntry
        />
        <TouchableOpacity
        //onPress={() => navigation.navigate("Register")}
        style={{
          backgroundColor: '#4543D3',
          fontFamily: 'ABeeZee_400Regular',
          padding: 10,
          paddingTop: 22,
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
            fontSize: 18,
            fontFamily: 'ABeeZee_400Regular',
            textAlign: 'center',
            color: 'white',
            letterSpacing: 1,
          }}
          >Registrar nuevo usuario</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})