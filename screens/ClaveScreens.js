import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RecuperarClave from './account/RecuperarClave';

import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';

const ClaveScreens = () => {
const navigation = useNavigation();

let [fontsLoaded] = useFonts({
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
});

  return (
    <View>
        <Text style={{fontSize: 55, textAlign: "center", marginTop: "5%", color: '#1DB873', marginTop: 95, fontWeight: '600', fontFamily: 'ABeeZee_400Regular',}}>Recupera tu contraseña</Text>
        <RecuperarClave />
    </View>
  )
}

export default ClaveScreens;