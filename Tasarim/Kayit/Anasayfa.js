import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './AnasayfaStyle';


const Anasayfa = ({navigation}) => {
 const onPress = () => {};
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.box1}>
        <View style={styles.boxes1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('KisiselBilgiler')}>
            <Text style={styles.text1}>Kişisel Bilgilerim</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxes2}>
          <TouchableOpacity onPress={() => navigation.navigate('Duyurular')}>
            <Text style={styles.text2}>Duyurular</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box1}>
        <View style={styles.boxes1}>
          <TouchableOpacity onPress={() => navigation.navigate('Randevularim')}>
            <Text style={styles.text1}> Randevularım</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxes2}>
          <TouchableOpacity onPress={() => navigation.navigate('RandevuAl')}>
            <Text style={styles.text2}>Randevu Al</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box1}>
        <View style={styles.boxes1}>
          <TouchableOpacity onPress={() => navigation.navigate('GecmisRandevularim')}>
            <Text style={styles.text1}>Geçmiş Randevularım</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxes2}>
          <TouchableOpacity onPress={() => navigation.navigate('AktifRandevularim')}>
            <Text style={styles.text2}>Aktif Randevularım</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Anasayfa;
