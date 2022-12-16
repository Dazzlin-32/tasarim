import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import React from 'react';
import styles from './GirisStyle';

const Giris = ({navigation}) => {
  const onPress = () => {};
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.bolum1}>
        <Image style={styles.bolum1_resim} source={require('./resim.jpg')} />
      </View>
      <View style={styles.bolum2}>
        <TextInput
          style={styles.eposta}
          placeholder="Kullanıcı Adı"
          keyboardType="ascii-capable"
        />
        <TextInput
          style={styles.sifre}
          placeholder="Şifre"
          keyboardType="ascii-capable"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button_sifremi_unuttum}
          onPress={onPress}>
          <Text style={styles.sifreText}>Şifremi Unuttum?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bolum3}>
        <TouchableOpacity
          style={styles.bolum3_giris}
          onPress={() => navigation.navigate('Anasayfa')}>
          <Text style={styles.text_Giris2}>GİRİŞ YAP</Text>
        </TouchableOpacity>
        {/* <Button
          color="#936af4"
          title="Giriş Yap"
          onPress={() => navigation.navigate('Anasayfa')}></Button> */}
      </View>
    </SafeAreaView>
  );
};

export default Giris;
