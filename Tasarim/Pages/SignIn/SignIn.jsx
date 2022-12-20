import React from "react";
import { SafeAreaView, View, StyleSheet, Image, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";

const SignIn = () => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState();
  const [auth, setAuth] =  React.useState(false);

  const authorize=()=>{

    email==='abc@gmail.com' && password === '123456' ? setAuth(true): setAuth(false);
  }

  const girisButton =()=>{
     authorize();
    //auth === true ? navigation.navigate('AnaSayfa'): alert('Giris Basarisiz ')
    auth === true ? alert('Giris Basarili '): alert('Giris Basarisiz ')
    

  }

  return (
    <SafeAreaView >
       <View style={styles.container} >
            <Image source={{
                uri: 'https://img.freepik.com/free-vector/washing-machine-cartoon-vector-icon-illustration-object-technology-icon-concept-isolated-premium_138676-4690.jpg?w=740&t=st=1670926084~exp=1670926684~hmac=2a6a11b645ffc21204c1611542bf0c94a4abf1165e1962e4e24c34f7912c16dd'}}
                style={styles.image}/>
            <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="E-posta"
        />
            <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Sifre"
        />
             <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{girisButton()}}>
                <Text style={styles.girisText}> Giris Yap </Text>
            </TouchableOpacity>
        </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: 'center'
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

export default SignIn;