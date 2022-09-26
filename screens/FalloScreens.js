import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fallo from './account/Fallo';
import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';

const FalloScreens = () => {

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });

  return (
    <View>
        <Text style={{fontSize: 45, textAlign: "center", color: 'red', marginTop: 95, fontWeight: '600', fontFamily: 'ABeeZee_400Regular',}}>Oops, algo falló?</Text>
        <Text style={{fontSize: 25, textAlign: "center", color: '#ababab', marginTop: 15, fontWeight: '400', marginBottom: 15, fontFamily: 'ABeeZee_400Regular',}}>Avisanos!</Text>
        <Fallo />
        <Text
        onPress={() => navigation.navigate("Login")}
        style={{
          color: '#017BFE',
          fontFamily: 'ABeeZee_400Regular',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}
        >Ya tienes una cuenta? Logueate!</Text>
    </View>
  );
}



export default FalloScreens;

// https://www.youtube.com/watch?v=TyCtFxpKptg&t=942s