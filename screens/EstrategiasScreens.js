import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FalloScreens from './FalloScreens';
import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';

const EstrategiasScreens = () => {

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });


  return (
    <View>
        <Text style={{fontSize: 40, textAlign: "center", marginTop: "2%", color: '#1DB873', marginTop: 65, fontWeight:'600', fontFamily: 'ABeeZee_400Regular',}}>Mis estrategias</Text>
        <Text style={{marginLeft: 15, marginRight: 15, fontSize: 18, marginTop: 30, fontFamily: 'ABeeZee_400Regular',}}>Sed sollicitudin tortor nec porttitor scelerisque. Curabitur eu pharetra quam, eu volutpat mi. Vestibulum dapibus velit lacinia felis molestie, ut rutrum lacus efficitur. Morbi ullamcorper viverra metus vel dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque quis leo pulvinar, semper lorem at, sollicitudin ante. </Text>

        <Text style={{fontSize: 40, textAlign: "center", marginTop: "2%", color: '#1DB873', marginTop: 65, fontWeight:'600', fontFamily: 'ABeeZee_400Regular',}}>Testing Strategyc</Text>
        <Text style={{marginLeft: 15, marginRight: 15, fontSize: 18, marginTop: 30, fontFamily: 'ABeeZee_400Regular',}}>Sed sollicitudin tortor nec porttitor scelerisque. Curabitur eu pharetra quam, eu volutpat mi. Vestibulum dapibus velit lacinia felis molestie, ut rutrum lacus efficitur. Morbi ullamcorper viverra metus vel dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque quis leo pulvinar, semper lorem at, sollicitudin ante. </Text>

        <TouchableOpacity
        onPress={() => navigation.navigate("FalloScreens")}
        style={{
          backgroundColor: '#4543D3',
          padding: 10,
          paddingTop: 15,
          paddingBottom: 15,
          marginTop: '10%',
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
            textAlign: 'center',
            color: 'white',
            letterSpacing: 1,
            fontFamily: 'ABeeZee_400Regular',
          }}
          >Comparar</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EstrategiasScreens