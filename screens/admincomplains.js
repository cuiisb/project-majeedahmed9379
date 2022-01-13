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

async function GetComps(){
    const response = await fetch(`${FIREBASE_API_ENDPOINT}/complaints.json`);
    const data = await response.json();
    //console.log(allstuds);
    return data;
};
export default function GetComplaints({navigation}){
    GetComps().then(res=>{
            console.log(res);
            if(allcomps[0]=="Refreshing..."){
                setcomps(res);
            }
        })
    var [allcomps,setcomps] = React.useState(["Refreshing..."]);
    
    return(
        <View>
             
          <Button title="Refresh" onPress={()=>{ 
              GetComps().then(
                res=>{
                    
                    setcomps(res);
                    console.log(allcomps);
                }
              )} 
          }>

          </Button>
          
    

          <ScrollView style={{width:"95%"}} >
              
            <Text style={{textAlign:'center', fontFamily:"Bold",fontSize:20,marginTop:15,color:"blue"}}>All Gatherings</Text>
            <View>
              {
               Object.keys(allcomps).map((item) => (
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
                    <Text style={{color:"white",fontSize:20,fontFamily:"Bold"}}>{allcomps[item].title}</Text>
                    <Text style={{color:"white",fontSize:10,fontFamily:"Sophia"}}>{allcomps[item].description}</Text>
                    <Text style={{color:"white",fontSize:10,fontFamily:"Sophia"}}>{allcomps[item].date}</Text>
                    
                </View>
                  
               ))
            }
        </View>

        </ScrollView>


        </View>
      )
}
const styles = StyleSheet.create({
    view: {
      backgroundColor: "#9042f5",
      width: "100%",
      marginTop:"5%",
      borderBottomRightRadius:50,
      alignItems:"center",
      marginLeft:15,
      width:"90%",
      padding:15
      
    }
  })