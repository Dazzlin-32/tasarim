import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  bolum1: {
    flex: 3,
  },
  bolum1_resim: {
    resizeMode: 'center',
    width: 400,
    height: 250,
    borderRadius: 10,
    marginLeft:5
  },
  text_Giris: {
    fontSize: 25,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 25,
  },

  bolum2: {
    flex: 3,
    justifyContent: 'space-between',
  },
  eposta: {
    height: 57,
    width: 332,
    marginBottom: 10,
    marginHorizontal: 30,
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 15,
    fontSize: 15,
    fontWeight: 'bold',
    alignContent: 'stretch',
  },
  sifre: {
    height: 57,
    width: 332,
    marginHorizontal: 30,
    marginBottom: 10,

    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 15,
    fontSize: 15,
    fontWeight: 'bold',
    alignContent: 'stretch',
  },
  button_sifremi_unuttum: {
    alignItems: 'center',
  },

  bolum3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bolum3_giris: {
    alignItems: 'center',
    backgroundColor: '#2D7BA8',
    height: 57,
    width: 332,
    borderRadius: 15,
  },
  text_Giris2: {
    height: 200,
    fontWeight: 'bold',
    color: '#D9E3F0',
    margin: 20,
    fontFamily: 'Times New Roman Bold',
  },
  sifreText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 50,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
});
