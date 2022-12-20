import React from "react";
import { SafeAreaView, View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import Head from "../Components/Head";

const MakineEkle = () => {

  return (
    <SafeAreaView >
        <Head title= 'Makine Ekle '/>
       <View style={styles.container} >
           
        <TextInput
            style={styles.input}
            placeholder="Yurt Ad "
        />
        <TextInput
            style={styles.input}
            placeholder="Blok ID"
        />
        <TextInput
            style={styles.input}
            placeholder="Makine ID"
        />
        <TextInput
            style={styles.input}
            placeholder="Makine Marka"
        />
        <TextInput
            style={styles.input}
            placeholder="Calisma Saat"
        />
        <TextInput
            style={styles.input}
            placeholder="Baska"
        />
        <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{}}>
            <Text style={styles.ekleText}> Ekle </Text>
        </TouchableOpacity>
       </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: 'center',
  },
  input: {
    width:'70%',
    height: 40,
    margin: 2,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'grey',
  },
  touchableOpacity: {
    backgroundColor: "#006AAF",
    width: '70%',
    height: 40,
    margin: 12,
    padding: 5,
    alignItems: 'center'
  },
  ekleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'  }
});

export default MakineEkle;