import { StatusBar } from 'expo-status-bar';
import { Alert,StyleSheet, Text, View,Image,TextInput, TouchableOpacity,ScrollView,Button, AsyncStorage} from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StackActions} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const FIREBASE_API_ENDPOINT = 'https://campushelper-59195-default-rtdb.firebaseio.com/';
function updateCredentials(id,uname,pass){
    var requestOptions = {
        method: 'PATCH',
        body: JSON.stringify({
          username:uname,
          password:pass
        }),
      };
    
      fetch(`${FIREBASE_API_ENDPOINT}/students/${id}.json`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));

}



async function GetID(){
    try{
        const id = await AsyncStorage.getItem("@studentdbid");
        const uname = await AsyncStorage.getItem("@studnetuname");
        const pass = await AsyncStorage.getItem("@studentpass")
        return [id,uname,pass];
    }
    catch(err){}
    
}


export default function ChangeCredentials({navigation}){
    var id;
    GetID().then(res=>{
        console.log(res);
        id = res[0];
        oldun = res[1],
        oldpass = res[2];
    });
    var oldun='';
    var oldpass='';
    var olduname='';
    var oldpassword='';
    var newuname;
    var newpassword;
    return(
        <View style={{width:"100%"}}>
            
            <ScrollView>
            <Text style={{textAlign:"center",marginTop:20,fontSize:25,fontFamily:'Bold',color:"#1aa7ec"}}>Edit Credentials</Text>
            <TextInput placeholder='Old Username' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
                  olduname = text;
          }}
          >
              </TextInput>

              <TextInput placeholder='Old password' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
                oldpassword = text;
          }}
          
          ></TextInput>

          <TextInput placeholder='New Username' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
                newuname = text
          }}
          ></TextInput>

            <TextInput placeholder='New Password' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
                newpassword = text;
                
          }}
          
          ></TextInput>

          

          


          <TouchableOpacity style={[styles.AddButton,{backgroundColor:'#797ef6'}]} 
            onPress={
          ()=>{
            if((id !== undefined)&(oldun == olduname)&(oldpass = oldpassword)){
              updateCredentials(id,newuname,newpassword);
            Alert.alert("Credentials updated successfully");
            }
            else{
                Alert.alert("Invalid username or password");
            }

        }}
        activeOpacity={0.5} 
        >
          <Text style={{fontFamily:"Bold",color:"white",fontSize:25}}>Edit</Text>

        </TouchableOpacity>
    </ScrollView>
    </View>
    )
}




const styles = StyleSheet.create({
    list:{
      backgroundColor:"#ADD8e6",
      marginLeft:"5%",
      marginTop:"3%",
      borderWidth:2,
      width:"90%",
      padding:"3%",
      borderRadius:10,
      borderColor:"blue"
    },
    AddButton:{
    
      width:"50%",
      backgroundColor:"#4adede",
      padding:"3%",
      alignItems:"center",
      marginTop:25,
      borderRadius:45,
      marginLeft:"25%",
      
    },
    
    input:{
        marginLeft:"5%",
        borderWidth:1,
        borderColor:"blue",
        paddingLeft:6,
        height:40,
        marginTop:5,
        width:"70%",
        fontSize:15,
        borderRadius:10,
        fontFamily:"Bold",
        color:"#3f05ff",
        marginTop:30
      
      
    },
    
  
  });