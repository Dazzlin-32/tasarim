import React from "react";
import { SafeAreaView, View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import Head from "../Components/Head";
import { SelectList } from 'react-native-dropdown-select-list'

const MakineSil = () => {
     const [selected, setSelected] = React.useState('');
  
  const datas = [
      {key:'1', value:'Makine 1'},
      {key:'2', value:'Makine 2'},
      {key:'3', value:'Makine 3'},
      {key:'4', value:'Makine 4'},
      {key:'5', value:'Makine 5'},
      {key:'6',value:'Makine 6'},
      {key:'7',value:'Makine 7'},
  ]

  return (
    <SafeAreaView >
        <Head title= 'Makine Sil'/>
      
                 
           
        
       
    
       <SelectList style={styles.selectlist}
                    setSelected={(val) => setSelected(val)} 
                    data={datas} 
                    save="value"
                />
        <View style={styles.container}>
             <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{}}>
            <Text style={styles.ekleText}> Sil </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{}}>
            <Text style={styles.ekleText}> Arizali </Text>
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
  selectlist: {
    margin: 10,
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

export default MakineSil;