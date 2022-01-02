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
import adminstudent from './adminstudent';


const Drawer = createDrawerNavigator();

export default function AdminHomeScreen() {
  
  
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={AdminHomeMain} />
        <Drawer.Screen name="adminstudent" component={adminstudent} />
      </Drawer.Navigator>
  );
}
