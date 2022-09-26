import { Text ,View, StyleSheet, SafeAreaView } from 'react-native';
import * as React from 'react';
import * as Progress from 'react-native-progress';
import {
    useFonts,
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  } from '@expo-google-fonts/abeezee';

  
const CreateE = () => {

    let [fontsLoaded] = useFonts({
        ABeeZee_400Regular,
        ABeeZee_400Regular_Italic,
      });
      
    return(
        <View>
            <Progress.Bar progress={0.5} width={200} style={{ marginTop: 10, marginLeft: 40, }} />
            <Text style={{marginTop: 60, marginLeft: 40, fontSize: 22, fontFamily: 'ABeeZee_400Regular',}}>Moneda: USDT</Text>
            <Text style={{marginTop: 20, marginLeft: 40, fontSize: 22, fontFamily: 'ABeeZee_400Regular',}}>Limite: Unlimite</Text>
            <Text style={{marginTop: 20, marginLeft: 40, fontSize: 22, fontFamily: 'ABeeZee_400Regular',}}>Transacciones posibles:</Text>
            <Text style={{marginTop: 40, marginLeft: 40, fontSize: 22, fontWeight: '700', fontFamily: 'ABeeZee_400Regular',}}>BTC/USDT</Text>
            <Text style={{marginTop: 40, marginLeft: 40, fontSize: 22, fontWeight: '700', fontFamily: 'ABeeZee_400Regular',}}>ETH/USDT</Text>
            <Text style={{marginTop: 40, marginLeft: 40, fontSize: 22, fontWeight: '700', fontFamily: 'ABeeZee_400Regular',}}>BNB/USDT</Text>


            <SafeAreaView style={{flexDirection: 'row', marginTop: 40, marginLeft: 40, marginRight: 'auto', justifyContent: 'space-between', width: '95%',}}>
                <Text 
                    style={{marginTop: 40, backgroundColor: '#4543D3', color: '#fff', fontSize: 22, fontWeight: '600', padding: 10, borderRadius: 10, width: 160, textAlign: 'center', shadowColor: '#121111',
                    shadowOffset: {width: -2, height: 4},
                    fontFamily: 'ABeeZee_400Regular',
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 20,
                    shadowColor: '#121111',}} 
                    //onPress={onPressTitle}
                >Transacciones</Text>
            </SafeAreaView>
        </View>
    )
}
export default CreateE;
  
const Styles = StyleSheet.create({
     container :{
        alignContent:'center',
        margin: 37,
        }
})