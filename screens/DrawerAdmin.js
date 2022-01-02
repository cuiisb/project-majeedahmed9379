import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AsyncStorage,ImageBackground,StyleSheet, Text, View,Image,TextInput, TouchableOpacity} from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StudentHomeMain from './Studenthomemain';
import AdminHomeMain from './Adminhomemain';


const AdminLoggedIn = async ()=>{
  console.log("here");
  try{
    await AsyncStorage.setItem("@adminstatus","Logged")
    console.log("Value set to logged");
  }
  catch(err){
    console.log(err);
  }
}
const Drawer = createDrawerNavigator();

export default function AdminHomeScreen() {
  AdminLoggedIn().then(res=>{
    console.log("Here 1");
  })
  
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={AdminHomeMain} />
      </Drawer.Navigator>
  );
}
