
import { Text ,View, StyleSheet, SafeAreaView } from 'react-native';
import * as React from 'react';
import {
    useFonts,
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  } from '@expo-google-fonts/abeezee';

  
const Cards = () => {

    let [fontsLoaded] = useFonts({
        ABeeZee_400Regular,
        ABeeZee_400Regular_Italic,
      });

    // const onPressTitle = () => {
    //     setTitleText("Bird's Nest [pressed]");
    // };
    
      
    return(
        <View>
            <Text style={{marginTop: 60, marginLeft: 40, fontSize: 22, fontFamily: 'ABeeZee_400Regular',}}>Moneda: USDT</Text>
            <Text style={{marginTop: 10, marginLeft: 40, fontSize: 22, fontFamily: 'ABeeZee_400Regular',}}>Limite: Unlimite</Text>
            <Text style={{marginTop: 10, marginLeft: 40, fontSize: 22, fontFamily: 'ABeeZee_400Regular',}}>Transacciones posibles:</Text>
            <Text style={{marginTop: 20, marginLeft: 40, fontSize: 22, fontWeight: '700', fontFamily: 'ABeeZee_400Regular',}}>BTC/USDT</Text>
            <Text style={{marginTop: 20, marginLeft: 40, fontSize: 22, fontWeight: '700', fontFamily: 'ABeeZee_400Regular',}}>ETH/USDT</Text>
            <Text style={{marginTop: 20, marginLeft: 40, fontSize: 22, fontWeight: '700', fontFamily: 'ABeeZee_400Regular',}}>BNB/USDT</Text>


            <SafeAreaView style={{flexDirection: 'row', marginTop: 5, marginLeft: 5, marginRight: 'auto', justifyContent: 'space-between', width: '95%',}}>
                <Text 
                    style={{marginTop: 40, backgroundColor: '#4543D3', color: '#fff', fontSize: 18, fontWeight: '600', padding: 8, borderRadius: 10, width: 130, textAlign: 'center', shadowColor: '#121111',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 20,
                    shadowColor: '#121111',
                    fontFamily: 'ABeeZee_400Regular',}} 
                    //onPress={onPressTitle}
                >Transacciones</Text>
                <Text 
                    style={{marginTop: 40, backgroundColor: '#1DB873', color: '#fff', fontSize: 18, fontWeight: '600', padding: 10, borderRadius: 10, width: 130, textAlign: 'center', marginLeft: 5, marginRight: 5, shadowColor: '#121111',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 20,
                    shadowColor: '#121111',
                    fontFamily: 'ABeeZee_400Regular',}} 
                    //onPress={onPressTitle}
                >Stop</Text>
                <Text 
                    style={{marginTop: 40, backgroundColor: '#e60b0b', color: '#fff', fontSize: 18, fontWeight: '600', padding: 10, borderRadius: 10, width: 130, textAlign: 'center', shadowColor: '#121111',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 20,
                    shadowColor: '#121111',
                    fontFamily: 'ABeeZee_400Regular',}} 
                    //onPress={onPressTitle}
                >Eliminar</Text>
            </SafeAreaView>
        </View>
    )
}
export default Cards;
  
const Styles = StyleSheet.create({
     container :{
        alignContent:'center',
        margin: 37,
        }
})