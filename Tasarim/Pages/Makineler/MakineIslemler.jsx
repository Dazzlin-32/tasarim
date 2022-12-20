import React from "react";
import { SafeAreaView, View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import Head from "../Components/Head";
import { SelectList } from 'react-native-dropdown-select-list'

const MakineIslemler = () => {
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
   const datas2 = [
      {key:'1', value:'Tarih 1'},
      {key:'2', value:'Tarih 1'},
      {key:'3', value:'Tarih  3'},
      {key:'4', value:'Tarih 4'},
      {key:'5', value:'Tarih 5'},
      {key:'6',value:'Tarih 6'},
      {key:'7',value:'Tarih 7'},
  ]

  return (
    <SafeAreaView >
        <Head title= 'Makine Islemler'/>
      
                 
           
        
       
    
       <SelectList style={styles.selectlist}
                    setSelected={(val) => setSelected(val)} 
                    data={datas} 
                    save="value"
                    placeholder="Makine sec"
                />
        <SelectList style={styles.selectlist}
                    setSelected={(val) => setSelected(val)} 
                    data={datas2} 
                    save="value"
                    placeholder="Tarih sec"
                />
        <View style={styles.container}>
             <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{}}>
            <Text style={styles.ekleText}> Goster </Text>
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

export default MakineIslemler;