import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View,Image,TextInput, TouchableOpacity} from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StudentHomeMain from './Studenthomemain';



const Drawer = createDrawerNavigator();

export default function StudentHomeScreen() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StudentHomeMain} />
        {/* <Drawer.Screen name="" component={} /> */}
      </Drawer.Navigator>
  );
}
