import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const FIREBASE_API_ENDPOINT = 'https://campushelper-59195-default-rtdb.firebaseio.com/';

const Tab = createMaterialBottomTabNavigator();
export default function Gettogethers({ navigation }) {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen name="Home" component={GetAllGTS}
        options={{
          tabBarColor: '#fb8500',
          tabBarLabel: 'View',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-box-multiple" color={color} size={26} />
          ),
        }}

      />
      <Tab.Screen name="Home2" component={NewGT}
        options={{
          tabBarColor: '#ee6c4d',
          tabBarLabel: 'View',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-box-multiple" color={color} size={26} />
          ),
        }}

      />
    </Tab.Navigator>
  );
}


async function GetGTs() {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/gettogethers.json`);
  const data = await response.json();
  //console.log(allstuds);
  return data;
};


function GetAllGTS({ navigation }) {

  GetGTs().then(res => {
    console.log(res);
    if (allgts[0] == "Refreshing...") {
      setallgts(res);
    }
  })
  var [allgts, setallgts] = React.useState(["Refreshing..."]);

  return (
    <View style={{ alignItems: 'center' }}>
       <TouchableOpacity onPress={() => {
        GetGTs().then(
          res => {

            setallgts(res);
            console.log(allgts);
          })}}
          style={{backgroundColor:"#e64a45",padding:5,width:100 ,borderRadius:10}}>
        <Text style={{textAlign:"center",fontFamily:"Bold",fontSize:15,color:"white"}}>Refresh</Text>
      </TouchableOpacity>





      <ScrollView style={{ width: "95%" }} >

        <Text style={{ textAlign: 'center', fontFamily: "Bold", fontSize: 20, marginTop: 15, color: "#fb8500" }}>All Gatherings</Text>
        <View>
          {
            Object.keys(allgts).map((item) => (
              //   <TouchableOpacity
              //      style={styles.list}
              //      onPress = {() =>{
              //       Alert.alert(allgts[item].title,`Venue: ${allgts[item].venue}`);
              //      }}

              //      >

              //      <Text style={{color:"blue",fontSize:16,fontFamily:"Bold"}}>
              //         {allgts[item].title}
              //      </Text>
              //   </TouchableOpacity>
              <View style={styles.view}>
                <Text style={{ color: "white", fontSize: 20, fontFamily: "Bold" }}>{allgts[item].title}</Text>
                <Text style={{ color: "white", fontSize: 10, fontFamily: "Sophia" }}>{allgts[item].description}</Text>
                <Text style={{ color: "white", fontSize: 10, fontFamily: "Sophia" }}>{allgts[item].date}</Text>
                <Text style={{ color: "white", fontSize: 10, fontFamily: "Sophia" }}>{allgts[item].time}</Text>
                <Text style={{ color: "white", fontSize: 10, fontFamily: "Sophia" }}>{allgts[item].venue}</Text>
              </View>

            ))
          }
        </View>

        <Text style={{ paddingBottom: 50 }}></Text>

      </ScrollView>
     


    </View>
  )
}





const AddNewGT = (title, description, date, time, venue) => {
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      description: description,
      date: date,
      time: time,
      venue: venue,
    }),
  };

  fetch(`${FIREBASE_API_ENDPOINT}/gettogethers.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

function NewGT() {
  var venue = 'Unspecified';
  var title = 'Unspecified';
  var description = 'Unspecified';
  var date = 'Unspecified';
  var time = 'Unspecified';
  return (
    <View style={{alignItems:'center'}}>
      <Text style={{fontSize:25,fontFamily:"Bold",color:"#e6772e"}}>Create a Get together</Text>
      <TextInput style={styles.input} selectionColor={"blue"}
       placeholder='Title' onChangeText={(text) => {
        title = text;
      }}></TextInput>
      <TextInput style={styles.input} selectionColor={"blue"}
      placeholder='Description' multiline={true} numberOfLines={5} maxLength={500} onChangeText={(text) => {
        description = text;

      }}></TextInput>
      <TextInput style={styles.input} selectionColor={"blue"}
      placeholder='Date' onChangeText={(text) => {
        date = text;
      }}></TextInput>
      <TextInput style={styles.input} selectionColor={"blue"}
      placeholder='Time' onChangeText={(text) => {
        time = text;
      }}></TextInput>
      <TextInput style={styles.input} selectionColor={"blue"}
      placeholder='Venue' onChangeText={(text) => {
        venue = text;
      }}></TextInput>

      <TouchableOpacity style={[styles.AddButton, { backgroundColor: '#e64a45' }]}
        onPress={
          () => {
            AddNewGT(title, description, date, time, venue);
          }}
        activeOpacity={0.5}>

        <Text style={{ fontFamily: "Bold", color: "white", fontSize: 25 }}>Create</Text>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#ADD8e6",
    marginLeft: "5%",
    marginTop: "3%",
    borderWidth: 2,
    width: "90%",
    padding: "3%",
    borderRadius: 10,
    borderColor: "blue"
  },
  AddButton: {

    width: "50%",
    backgroundColor: "#4adede",
    padding: "3%",
    alignItems: "center",
    marginTop: 25,
    borderRadius: 45,
    

  },

  input: {
    
    borderWidth: 1,
    borderColor: "#E6772e",
    paddingLeft: 6,
    height: 40,
    marginTop: 5,
    width: "70%",
    fontSize: 15,
    borderRadius: 10,
    fontFamily: "Bold",
    color: "#3f05ff",
    marginTop: 30


  },
  view: {
    backgroundColor: "#ffb703",
    width: "100%",
    marginTop: "5%",
    borderBottomRightRadius: 50,
    alignItems: "center",
    marginLeft: 15,
    width: "90%",
    padding: 15,
    elevation:10

  }

});