import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
var name, age, deparment = "";
const loggedOut = async () => {
  try {
    await AsyncStorage.removeItem("@studentstatus")
    console.log("Logged out");
  }
  catch (err) {
    console.log(err);
  }
}
async function getStudent() {
  try {
    name = await AsyncStorage.getItem("@studentname")
    return name;
  }
  catch (err) {
    console.log(err);
  }

}

export default function StudentHomeMain({ navigation }) {
  const [name, setname] = React.useState("")
  getStudent().then(res => {
    setname(res);
  })
  console.log(name);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView style={styles.scrollview}>
        <Image source={require('../assets/gradient.jpg')} style={{ opacity: 0.6, position: "absolute" }} />
        <Text style={{ marginTop: 30, width: "90%", backgroundColor: "white", padding: "3%", fontSize: 30, fontFamily: "Sofia", borderBottomLeftRadius: 30,left:"2%" }}>Welcome {name}</Text>

        <View style={{ height: 100, width: 350, marginTop: "10%", justifyContent: "center", alignItems: "center", elevation: 5, backgroundColor: "white", borderBottomLeftRadius: 50 ,marginLeft:5}}>
          <Image source={require('../assets/Discussion.jpg')}
            style={{ position: "absolute", width: "100%", height: "100%", resizeMode: "cover", transform: [{ scale: 0.95 }], borderBottomLeftRadius: 50 }}
          />
          <TouchableOpacity style={{ backgroundColor: "blue", width: "80%", opacity: 0.8, top: "50%", borderRadius: 10, }} activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('Get Togethers');
            }}

          >
            <Text style={{ textAlign: "center", fontFamily: "Bold", color: "white", fontSize: 25 }}>Get togethers</Text>

          </TouchableOpacity>
        </View>

        <View style={{ height: 100, width: 350, marginTop: "10%", justifyContent: "center", alignItems: "center", elevation: 5, backgroundColor: "white", borderBottomLeftRadius: 50, marginLeft: 5 }}>
          <Image source={require('../assets/complain.jpg')}
            style={{ position: "absolute", width: "60%", height: "100%", resizeMode: "cover", transform: [{ scale: 0.95 }], borderBottomLeftRadius: 50 }}
          />
          <TouchableOpacity style={{ backgroundColor: "blue", width: "80%", opacity: 0.8, top: "50%", borderRadius: 10, }} activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('File a Complaint');
            }}
          >
            <Text style={{ textAlign: "center", fontFamily: "Bold", color: "white", fontSize: 25 }}>File a Complaint</Text>

          </TouchableOpacity>
        </View>

        <View style={{ height: 100, width: 350, marginTop: "10%", justifyContent: "center", alignItems: "center", elevation: 5, backgroundColor: "white", borderBottomLeftRadius: 50, marginLeft: 5 }}>
          <Image source={require('../assets/credentials.png')}
            style={{ position: "absolute", width: "40%", height: "100%", resizeMode: "cover", transform: [{ scale: 0.95 }], borderBottomLeftRadius: 50 }}
          />
          <TouchableOpacity style={{ backgroundColor: "blue", width: "80%", opacity: 0.8, top: "50%", borderRadius: 10, }} activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('Change Credentials');
            }}
          >
            <Text style={{ textAlign: "center", fontFamily: "Bold", color: "white", fontSize: 25 }}>Change credentials</Text>

          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => {
        loggedOut().then(res => {
          navigation.navigate("Main");
        })
      }}
        style={{ left:"30%",marginTop: 70, backgroundColor: "red", width: "40%", opacity: 0.8, borderRadius: 10, }} activeOpacity={0.5}>
        <Text style={{ textAlign: "center", fontFamily: "Bold", color: "white", fontSize: 25 }}>Log out</Text>

      </TouchableOpacity>
      <Text style={{paddingBottom:200}}></Text>

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

