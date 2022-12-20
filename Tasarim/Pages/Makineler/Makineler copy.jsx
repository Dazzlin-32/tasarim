import React, { useState } from "react";

import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Foot from "../Components/Foot";
import Head from "../Components/Head";

const DATA = [
      {
    
    id: '0',
    title: 'Makine Ekle',
  },
   {
    id: '1',
    title: 'Makine Sil',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const Makineler
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
        <Head title= 'Makineler '/>
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
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
});

export default Makineler;