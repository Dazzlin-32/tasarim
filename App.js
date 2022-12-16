import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Giris from './Tasarim/Giris/Giris';
import Anasayfa from './Tasarim/Kayit/Anasayfa';
import KisiselBilgiler from './Tasarim/KisiselBilgiler1/KisiselBilgiler';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Giris"
          component={Giris}
          options={{title: 'GİRİŞ'}}></Stack.Screen>
        <Stack.Screen
          name="Anasayfa"
          component={Anasayfa}
          options={{title: 'ANASAYFA'}}></Stack.Screen>
        <Stack.Screen
          name="KisiselBilgiler"
          component={KisiselBilgiler}
          options={{title: 'KİŞİSEL BİLGİLERİM'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
