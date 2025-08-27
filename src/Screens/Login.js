import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
const navigation = useNavigation()

  return (
    <View style={[styles.container,]}>
      <View style={styles.scrapdealview}>
        <Image source={require("../images/scrapdeallogin1.jpg")} style={styles.scrapimage} ></Image>
        <Text style={styles.scrapdealtext} >Scrap Deal</Text>
      </View>
      <Image source={require("../images/scrapdeallogin.jpg")} style={styles.scrapimage1} ></Image>
<View style={styles.welcomehassleview} >
  <Text style={styles.welcometext}>Welcome to Scrap Deal!</Text>
  <Text style={styles.hassletext}>Hassle-free scrap pickup for shopkeepers</Text>
</View>
      <Text style={styles.logintext} >Log In</Text>
      <TextInput numberOfLines={1} maxLength={10} inputMode='numeric' style={styles.textinput} placeholder='Phone Number'keyboardType='numeric' value={phoneNumber}
        onChangeText={setPhoneNumber} ></TextInput>
<TouchableOpacity style={styles.getouttouchable}   onPress={() => navigation.navigate("Otpscreen")}  >
  <Text style={styles.getotptext} >Get OTP</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25,
    marginHorizontal:15
  },
  scrapimage:{height:30,width:30},
  scrapdealtext:{alignSelf:"center",fontWeight:"bold",fontSize:16,marginLeft:"2%"},
  scrapdealview:{flexDirection:"row",marginTop:30},
  scrapimage1:{height:"30%",width:"100%",borderRadius:20,marginTop:20},
  welcometext:{fontWeight:"bold",fontSize:17},
  hassletext:{color:"grey",fontSize:14},
  welcomehassleview:{marginTop:20},
  logintext:{marginTop:40,fontSize:15},
  textinput:{marginTop:20,borderWidth:.5,paddingLeft:"5%",borderColor:"lightgrey",borderRadius:10,paddingVertical:13},
  getotptext:{alignSelf:"center",fontSize:15,fontWeight:"500",color:"white"},
  getouttouchable:{backgroundColor:"#00A572",paddingVertical:13,borderRadius:15,marginTop:50}
});

export default Login;