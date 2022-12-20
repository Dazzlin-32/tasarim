import React, { useState } from "react";

import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Foot from "../Components/Foot";
import Head from "../Components/Head";

const DATA = [
      {
    
    id: '0',
    title: 'Duyuru Bir',
    icerik: 'Loreum Ipsum',
    tarih: '12.12.2022',
  },
   {
    id: '1',
    title: 'Duyur Iki',
    icerik: 'Loreum Ipsum',
    tarih: '12.12.2022',
  },
    {
        id: '2',
        title: 'Duyur Uc',
        icerik: 'Loreum Ipsum',
        tarih: '12.12.2022',
  },
  {
    id: '3',
    title: 'Duyur Dort',
    icerik: 'Loreum Ipsum',
    tarih: '12.12.2022',
  },
  {
    id: '4',
    title: 'Duyur Bes',
    icerik: 'Loreum Ipsum',
    tarih: '12.12.2022',
  },
  {
    id: '5',
    title: 'Duyur Alti',
    icerik: 'Loreum Ipsum',
    tarih: '12.12.2022',
  },
  {
    id: '6',
    title: 'Duyur Yedi',
    icerik: 'Loreum Ipsum',
    tarih: '12.12.2022',
  },
  {
    id: '7',
    title: 'Duyur Sekiz',
    icerik: 'Loreum Ipsum',
    tarih: '12.12.2022',
  },
   
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.icerik]}>{item.icerik}</Text>
     <Text style={[styles.title]}>{item.tarih}</Text>
  </TouchableOpacity>
);

const GecmisDuyuru
 = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#006AAF" : "#9FCEEC";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View>
        <Head title= 'Gecmis Duyular '/>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <Foot/>
    </View>
      
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  icerik: {
    color: '#D3D8DA',
    fontSize: 25,
  },
  tarih: {
    color: '#D3D8DA',
    fontSize: 12,
    
  }
});

export default GecmisDuyuru;