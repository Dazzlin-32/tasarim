import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Image, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";
import Foot from "../Components/Foot";
import Head from "../Components/Head";

const DuyuruYap = () => {
   const [duyuru, setDuyur] = useState('');
  return (
    <SafeAreaView >
   <Head title= 'Duyuru Yap '/>
       <View style={styles.container} >
           
            <TextInput
            style={styles.input}
            value={duyuru}
            placeholder="Duyuru"
        />
             <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{}}>
                <Text style={styles.girisText}>Yayinla </Text>
            </TouchableOpacity>
        </View>
        <Foot/>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
   alignItems: 'center',
  },
  image: {
    margin: 12,
    height: 200,
    width: 200,
  },
  input: {
    width:'70%',
    height: 40,
    margin: 12,
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
  girisText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'  }
});

export default DuyuruYap;