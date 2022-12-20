import { StyleSheet, View, Text } from "react-native";
const Head  = (props) => {
    return ( 
    <View style={styles.head}>
        <Text style={styles.headText}>{props.title}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
     head: {
    backgroundColor: "smokey white",
    width: "100%",
    color: "#006AAF",
    height: 50,
    borderBottomColor: "black",
    alignItems: "center",
    margin:10,
  },
  headText:{
    color: "#006AAF",
    fontSize: 32,
    fontWeight: 'bold',
  },
})
export default Head ;