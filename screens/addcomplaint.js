import { StatusBar } from 'expo-status-bar';
import { Alert,StyleSheet, Text, View,Image,TextInput, TouchableOpacity,ScrollView,Button} from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StackActions} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const FIREBASE_API_ENDPOINT = 'https://campushelper-59195-default-rtdb.firebaseio.com/';
const AddComplaintToDb = (title,description,date) => {
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        title:title,
        description:description,
        date:date
      }),
    };
  
    fetch(`${FIREBASE_API_ENDPOINT}/complaints.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
export default function AddComplaint({navigation}){
    var title = 'Unspecified';
      var description = 'Unspecified';
      var date  = 'Unspecified';
      return(
          <View style={{alignItems:"center"}}>
              <Text style={{fontSize:25,fontFamily:"Bold",color:"#ff5456"}}>File a complaint</Text>
              <TextInput style={styles.input} selectionColor={"red"}
              placeholder='Title' onChangeText={(text)=>{
                  title = text;
              }}></TextInput>
              <TextInput style={styles.input} selectionColor={"red"}
              placeholder='Description' multiline={true} numberOfLines={5} maxLength={500} onChangeText={(text)=>{
                  description = text;
                  
              }}></TextInput>
              <TextInput style={styles.input} selectionColor={"red"}
              placeholder='Date' onChangeText={(text)=>{
                  date = text;
              }}></TextInput>
  
                  <TouchableOpacity style={[styles.AddButton,{backgroundColor:'#ff5456'}]} 
                      onPress={
                      ()=>{
                          AddComplaintToDb(title,description,date);
                      }}
                      activeOpacity={0.5}>
  
                  <Text style={{fontFamily:"Bold",color:"white",fontSize:25}}>File</Text>
  
              </TouchableOpacity>
          </View>
      )
}





  
 



const styles = StyleSheet.create({
  
    AddButton:{
    
      width:"50%",
      backgroundColor:"#ff7a7b",
      padding:"3%",
      alignItems:"center",
      marginTop:25,
      borderRadius:45,
      
      
    },
    
    input:{
        
        borderWidth:1,
        borderColor:"#ffa0a1",
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