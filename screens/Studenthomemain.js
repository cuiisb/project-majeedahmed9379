import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AsyncStorage,ImageBackground,StyleSheet, Text, View,Image,TextInput, TouchableOpacity,Button} from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
var name,age,deparment = "";
const loggedOut = async()=>{
  try{
    await AsyncStorage.removeItem("@studentstatus")
    console.log("Logged out");
  }
  catch(err){
    console.log(err);
  }
}
async function getStudent(){
  try{
    name = await AsyncStorage.getItem("@studentname")
    return name;
  }
  catch(err){
    console.log(err);
  }

}

export default function StudentHomeMain({navigation,route}){
  const [name,setname] = React.useState("")
  getStudent().then(res=>{
    setname(res);
  })
  console.log(name);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
         onPress={() => {
          loggedOut().then(res=>{
            navigation.navigate("Main");
          })
          
        }}
        title="Log out"
      />
      <Text>Welcome {name}</Text>
    </View>
  );
};

