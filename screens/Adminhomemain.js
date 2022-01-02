import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View,Image,TextInput, TouchableOpacity,Button,AsyncStorage} from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';


const loggedOut = async()=>{
  try{
    await AsyncStorage.removeItem("@adminstatus")
    console.log("Logged out");
  }
  catch(err){
    console.log(err);
  }
}
export default function AdminHomeMain({ navigation }){


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => {
          loggedOut().then(res=>{
            navigation.navigate("Main");
          })
          
        }}
        title="Log Out"
      />
    </View>
  );
};