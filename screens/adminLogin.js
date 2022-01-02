import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity} from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {StackActions} from '@react-navigation/native'

const Stack = createNativeStackNavigator();
export default function AdminLoginScreen() {
  return (
    <NavigationContainer screenOptions={{headerShown: false}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={App}  />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



function loadAssets (){
    return Font.loadAsync({
      "Bold":require("../assets/fonts/Metropolis-Bold.otf"),
      "Sofia":require("../assets/fonts/sofiapro-light.otf")
    });
  }
   function App({navigation}) {
    const [fonts,loadfonts] = React.useState(false);
    if(!fonts){
      return (
        <AppLoading startAsync={loadAssets}
        onFinish={()=>loadfonts(true)} onError={()=>console.log("Not loaded")} > </AppLoading>
      )
    }
  
    return (
      
      <View style={styles.container}>
        
        
        <StatusBar style="auto" />
        <Image source={require('../assets/loginScreen.jpg')} style={styles.img}></Image>
        <View style={styles.login}>
        
          <View style={{right:"20%"}}>
          <Text style={{fontFamily:"Bold",textAlign:"left",fontSize:50,color:"#3f05ff",paddingLeft:45}} >Campus 
          </Text>
          <Text style={{fontFamily:"Sofia",textAlign:"left",fontSize:50,color:"white",paddingLeft:45}}>Helper
          </Text>
          <View style={{borderBottomWidth:1,width:175,borderColor:"blue",padding:5}}></View>
          </View>
          
          <Text style={{fontFamily:"Sofia",textAlign:"left",fontSize:30,color:"#376fb8"}}>Admin Login </Text>
          <TextInput placeholder='Username' style={styles.input} selectionColor={"blue"} underlineColorAndroid={"blue"}></TextInput>
          <TextInput secureTextEntry={true} placeholder='Password'style={styles.input} underlineColorAndroid={"blue"}></TextInput>
          <TouchableOpacity style={styles.loginButton} 
          onPress={
            ()=>{
  
            navigation.dispatch(StackActions.replace('HomeScreen'));
          }}>
            <Text style={{fontFamily:"Bold",color:"white",fontSize:25}}>Log In</Text>
  
          </TouchableOpacity>
       
          
        </View>
      </View>
      
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop:"20%",
      elevation:0,
      
    },
    loginButton:{
  
      width:"45%",
      backgroundColor:"#376fb8",
      padding:"3%",
      alignItems:"center",
      marginTop:25,
      borderRadius:45
    },
    img:{
      height:"30%",
      width:"100%",
      // position:"absolute"
    },
    login:{
      position:"relative",
      backgroundColor:"#aeabff",
      height:"80%",
      width:"100%",
      alignItems:"center",
      paddingTop:"5%",
      borderTopRightRadius:200,
      elevation:105,
      
  
      borderTopLeftRadius:50
      
    },
    input:{
      paddingLeft:6,
      height:40,
      marginTop:5,
      width:"65%",
      fontSize:15,
      paddingBottom:10,
      fontFamily:"Sofia",
      color:"#3f05ff",
      
      
    },
  
  });
  