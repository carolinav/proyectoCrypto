import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';



const HomeScreens = () => {

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });

  if(!fontsLoaded) return null;

  return (
    <View>
        <Image
          style={{ width: 130, height: 130, marginBottom: 15, marginLeft: 'auto', marginRight: 'auto', marginTop: 40, fontWeight: '700', fontSize: 15, }}
          source={require("../assets/bitcoin-2.png")}
        />
        <Text style={{fontSize: 40, textAlign: "center", marginTop: "2%", color: '#1DB873', marginTop: 65, fontWeight:'600', fontFamily: 'ABeeZee_400Regular',}}>Bienvenido a Crypto Estrategia</Text>
        <Text style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: "5%", fontSize: 22, color: '#969595'}}>
          <Text style={{fontFamily: 'ABeeZee_400Regular', fontSize: 20,}}>Interfaz automatizada para la inversión en crypto monedas.</Text>
        </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{
          backgroundColor: '#4543D3',
          padding: 10,
          paddingTop: 22,
          paddingBottom: 22,
          marginTop: '20%',
          width: '50%',
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
            fontSize: 22,
            fontFamily: 'ABeeZee_400Regular',
            textAlign: 'center',
            color: 'white',
            letterSpacing: 1,
          }}
          >Registrate</Text>
        </TouchableOpacity>
    </View>
  );
}

export default HomeScreens;



