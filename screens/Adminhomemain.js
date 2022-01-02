import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View,Image,TextInput, TouchableOpacity,Button} from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function AdminHomeMain({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => {}}
        title="Go to notifications"
      />
    </View>
  );
};