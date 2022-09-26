import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';


import CreateE from './account/CreateE';
import ProgressE from './account/ProgressE';
import EstrategiasCards from './EstrategiasCards';



const EstrategiasCreate = () => {

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });

  return (
    <View>
    <Text style={{flexDirection: 'row', paddingBottom:60,}}>
      <Image
          style={{ width: 120, height: 120, marginBottom: 120, marginLeft: 'auto', marginRight: 'auto', marginTop: 150, fontWeight: '700', fontSize: 15, }}
          source={require("../assets/bitcoin-2.png")}
        />
        
        <Text style={{fontSize: 40, textAlign: "center", marginTop: 30, color: '#4543D3', fontWeight:'600', marginLeft: 200, fontFamily: 'ABeeZee_400Regular',}}>Testing Strategy</Text>
    </Text>
    <TouchableOpacity
        onPress={() => navigation.navigate("EstrategiasCards")}
        style={{
          backgroundColor: '#1DB873',
          padding: 10,
          paddingTop: 10,
          paddingBottom: 10,
          marginLeft: 10,
          marginBottom: 20,
          width: '40%',
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
            textAlign: 'center',
            color: 'white',
            letterSpacing: 1,
            fontFamily: 'ABeeZee_400Regular',
          }}
          >Create</Text>
        </TouchableOpacity>
        <CreateE />
  </View> 
  )
}

export default EstrategiasCreate