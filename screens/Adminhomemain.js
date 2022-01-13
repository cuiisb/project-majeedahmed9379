import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, AsyncStorage } from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


const loggedOut = async () => {
  try {
    await AsyncStorage.removeItem("@adminstatus")
    console.log("Logged out");
  }
  catch (err) {
    console.log(err);
  }
}
export default function AdminHomeMain({ navigation }) {


  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView style={styles.scrollview}>
        <Image source={require('../assets/gradient.jpg')} style={{ opacity: 0.6, position: "absolute", height: "100%", width: "100%",resizeMode:"cover" }} />
        <Text style={{ marginLeft: 20, marginTop: 30, width: "90%", backgroundColor: "white", padding: "3%", fontSize: 30, fontFamily: "Sofia", borderBottomLeftRadius: 30 }}>Welcome Admin</Text>

        <View style={{ height:100,width:350 ,marginTop: "10%", justifyContent: "center", alignItems: "center", elevation: 5, backgroundColor: "white", borderBottomLeftRadius: 50,marginLeft:5 }}>
          <Image source={require('../assets/Discussion.jpg')}
            style={{ position: "absolute", width: "100%", height: "100%", resizeMode: "cover", transform: [{ scale: 0.95 }], borderBottomLeftRadius: 50 }}
          />
          <TouchableOpacity style={{ backgroundColor: "#0077b6", width: "80%", top: "50%", borderRadius: 10, }} activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Students Console');
            }}

          >
            <Text style={{ textAlign: "center", fontFamily: "Bold", color: "white", fontSize: 25 }}>Students Console</Text>

          </TouchableOpacity>
        </View>

        <View style={{ height:100,width:350 ,marginTop: "10%", justifyContent: "center", alignItems: "center", elevation: 5, backgroundColor: "white", borderBottomLeftRadius: 50,marginLeft:5}}>
          <Image source={require('../assets/Discussion.jpg')}
            style={{ position: "absolute", width: "100%", height: "100%", resizeMode: "cover", transform: [{ scale: 0.95 }], borderBottomLeftRadius: 50 }}
          />
          <TouchableOpacity style={{ backgroundColor: "#797EF6", width: "80%", top: "50%", borderRadius: 10, }} activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('See Complaints');
            }}

          >
            <Text style={{ textAlign: "center", fontFamily: "Bold", color: "white", fontSize: 25 }}>See Complaints</Text>

          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => {
          loggedOut().then(res => {
            navigation.navigate("Main");
          })

        }}
        style={{marginTop:"10%",width:"30%",backgroundColor:"blue",alignItems:"center",left:"35%",padding:10,borderRadius:10}}
        >
          <Text style={{color:"white",fontFamily:"Bold",fontSize:20}}>Log out</Text>
        </TouchableOpacity>
        <Text style={{paddingBottom:300}}></Text>

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#9042f5",
    width: "100%",
    
  }
})