import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
const Foot  = () => {
    return ( 
    <View style={styles.head}>
        <TouchableOpacity style={styles.button}
                    onPress = {()=> {}}>
            <Image style={styles.image}
                 source = {{uri: 'https://cdn-icons-png.flaticon.com/512/151/151846.png'}}/>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    head: {
    width: "100%",
    height: 60,
    alignItems: "flex-start",
    margin:10,
  },
  button: {
    width:'25%',
    height: 40,
    width: 40,
    margin:10,
  },
  image: {
    height: 15,
    width: 15,
    margin:10,
  }

})
export default Foot ;