import { StyleSheet, Text, TouchableOpacity, View , Image} from "react-native";
import Foot from "../Components/Foot";
import Head from "../Components/Head";



const KisiselBilgi
 = () => {




  return (
    <View >
        <Head title= 'Kisisel Bilgiler'/>
        <View style={styles.blueBackground}>
            <View style={styles.whiteBackground}>
                <Image  style={styles.image}
                        source={{uri: 'https://cdn-icons-png.flaticon.com/512/3177/3177283.png'}} />
                <Text style={styles.text.ad}>Ad Soyad</Text>
                <Text style={styles.text.yurt}>Yurt - Blok</Text>
                <Text style={styles.text.memur}>Blok Memuru</Text>
                <View  style={styles.greybackground}>
                   <Text  style={styles.text.form}>Kullanci Adi</Text> 
                    <Text  style={styles.text.form}>Telefon</Text> 
                     <Text  style={styles.text.form}>E-posta</Text> 
                      <Text style={styles.text.form}>Sifre</Text> 
                       <Text style={styles.text.form}>Yurt</Text> 
                </View>
                <TouchableOpacity   style={styles.touchable}
                onPress={()=>{}}>
                <Text  style={styles.text.kaydet} >KAYDET </Text>
            </TouchableOpacity>
            </View>
        </View>
        
      <Foot/>
    </View>
      
   
  );
};

const styles = StyleSheet.create({
    blueBackground: {
        backgroundColor: "#2D7BA8",
        height: '100%',
        alignItems: 'center',
    },
  whiteBackground: {
   backgroundColor: 'white',
   width: '80%',
    margin: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
    greybackground: {
        backgroundColor: "#C4C4C4",
        width: '90%',
        margin: 20,
        padding: 20,
        borderRadius: 10,
    },
  image: {
    height: 150,
    width:150,
    borderRadius: 80,    
  },
  text: {
   
    ad : {
        color: 'grey',
        fontSize: 25,  
        fontWeight: 'bold',  },
    yurt : {
        color: 'grey',
        fontSize: 22,    },
    memur : {
        color: 'grey',
        fontSize: 20,    },
    form: {
        fontSize: 20,
        color: 'white',
        margin: 5,
    },
    kaydet: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
  },
  touchable: {
    backgroundColor: "#2D7BA8",
    width: '70%',
    height: 40,
    margin: 12,
    padding: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default KisiselBilgi;