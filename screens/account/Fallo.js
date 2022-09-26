import React from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import {
  useFonts,
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';


const Fallo = () => {
  const [text, onChangeText] = React.useState("Nombre y Apellido");
  const [number, onChangeNumber] = React.useState(null);

  let [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });
  return (
    <SafeAreaView>
      <TextInput
            placeholder='Ingresa tu Nombre...'
            style={{height: 40, fontSize: 20, marginTop: 30, marginLeft: 'auto', marginRight: 'auto', width: "90%", paddingLeft: 10, borderWidth: 1, borderColor: '#dbdbdb', paddingBottom: 16, paddingTop: 12, height: 52, fontFamily: 'ABeeZee_400Regular',}}  
        />
        <TextInput
            placeholder='Ingresa tu Email...'
            style={{height: 40, fontSize: 20, marginTop: 30, marginLeft: 'auto', marginRight: 'auto', width: "90%", paddingLeft: 10, borderWidth: 1, borderColor: '#dbdbdb', paddingBottom: 16, paddingTop: 12, height: 52, fontFamily: 'ABeeZee_400Regular',}}  
        />
      <TextInput
        multiline
        numberOfLines={10}
        style={{fontSize: 20, marginTop: 30, marginLeft: 'auto', marginRight: 'auto', width: "90%", paddingLeft: 10, borderWidth: 1, borderColor: '#dbdbdb', paddingBottom: 16, paddingTop: 12, height: 140, color: '#7d7d7d', fontFamily: 'ABeeZee_400Regular',}}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Describe el fallo lo mas detallado posible"
        keyboardType="numeric"
      />
      <TouchableOpacity
        //onPress={() => navigation.navigate("Register")}
        style={{
          backgroundColor: '#4543D3',
          fontFamily: 'ABeeZee_400Regular',
          padding: 10,
          paddingTop: 15,
          paddingBottom: 15,
          marginTop: '10%',
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
            textAlign: 'center',
            fontFamily: 'ABeeZee_400Regular',
            color: 'white',
            letterSpacing: 1,
          }}
          >Reportar fallo</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
  },
});
export default Fallo;

