import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity,ScrollView,Button} from 'react-native';
import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StackActions} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FIREBASE_API_ENDPOINT = 'https://campushelper-59195-default-rtdb.firebaseio.com/';

const AddStudents = (name,age,dpt,semester) => {
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      name:name,
      age:age,
      department:dpt,
      semester:semester
    }),
  };

  fetch(`${FIREBASE_API_ENDPOINT}/students.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};


const Tab = createMaterialBottomTabNavigator();
export default function MyTabs() {
    return (
      <Tab.Navigator shifting={true}>
        <Tab.Screen name="Home" component={AllStudents} 
        options={{
            tabBarColor:'#1aa7ec',
            tabBarLabel: 'View',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-box-multiple" color={color} size={26} />
            ),
          }}
        
        />
        <Tab.Screen name="Home2" component={AddStudent} 
        options={{
            tabBarColor:'#4adede',
            tabBarLabel: 'Add',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-plus" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Home3" component={EditStudent} 
        options={{
            tabBarColor:'#797ef6',
            tabBarLabel: 'Edit',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-edit" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}
async function getStudents(){
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/students.json`);
  const data = await response.json();
  //console.log(allstuds);
  return data;
};

function AllStudents({navigation}){
  
  var [allstuds,setallstuds]= React.useState(["Refreshing.."]);
  var [allstudsids,setallstudsids]= React.useState(["Refreshing.."]);
  if(allstuds.length == 1){
    getStudents()
    .then((res)=>{
      setallstuds(res);
      setallstudsids(Object.keys(res));
      
    }); 
  }
  
  
    return(
        <View>
            
            <ScrollView style={{width:"95%"}} >
            <Text>All Students List</Text>
            <View>
              {

               Object.keys(allstuds).map((item) => (
                  <TouchableOpacity
                     style={styles.list}
                     onPress = {() =>{
                      console.log(allstudsids[Object.keys(allstuds).indexOf(item)]);
                     }}
                     
                     >
                       
                     <Text style={{color:"blue",fontSize:16,fontFamily:"Bold"}}>
                        {allstuds[item].name}
                     </Text>
                     <TouchableOpacity style={{width:30,position:"absolute",marginLeft:"70%",marginTop:"2%"}}
                     onPress={()=>{
                       console.log("Deleting",allstuds[item].name)
                     }}
                     >
                         <Text>Delete</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{width:30,position:"absolute",marginLeft:"90%",marginTop:"2%"}}
                       onPress={()=>{
                         const obj = {name:allstuds[item].name,
                          age: allstuds[item].age,
                          semester: allstuds[item].semester,
                          department: allstuds[item].department,
                          id:allstudsids[Object.keys(allstuds).indexOf(item)]
                          
                        }
                        navigation.jumpTo('Home3',obj);
                       }}
                       >
                         <Text>Edit</Text>
                       </TouchableOpacity>
                  </TouchableOpacity>
                  
               ))
            }
        </View>

        </ScrollView>
            
        </View>
    )
}

function AddStudent({navigation}){
    var name='';
    var age = '';
    var dpt = '';
    var semester = '';
    return(
        <View style={{width:"100%"}}>
            
            <ScrollView>
            <Text style={{textAlign:"center",marginTop:20,fontSize:25,fontFamily:'Bold',color:"#1E2F97"}}>Add a new student</Text>
            <TextInput placeholder='Name' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
                name = text;
                
          }}>
              </TextInput>

              <TextInput placeholder='Age' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
                age = text;
                
          }}></TextInput>

          <TextInput placeholder='Department' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
                dpt = text;
                
          }}></TextInput>

<TextInput placeholder='Semester' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
                semester = text;
                
          }}
          
          ></TextInput>

          

          


          <TouchableOpacity style={styles.AddButton} 
        onPress={
          ()=>{
            AddStudents(name,age,dpt,semester);
            
        }}
        activeOpacity={0.5} 
        >
          <Text style={{fontFamily:"Bold",color:"white",fontSize:25}}>Add</Text>

        </TouchableOpacity>
            </ScrollView>

            
            



        </View>
    )
}

function EditStudent({navigation,route}){
  var name = "";
  var age = "";
  var semester = "";
  var department = "";
  if(route.params){
    console.log(route.params);
    name = route.params.name;
    age = route.params.age;
    semester = route.params.semester;
    department = route.params.department;
  }
    
    
    return(
        
        <View style={{width:"100%"}}>
            
            <ScrollView>
            <Text style={{textAlign:"center",marginTop:20,fontSize:25,fontFamily:'Bold',color:"#1aa7ec"}}>Edit</Text>
            <TextInput placeholder='Name' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
          }}
          defaultValue={name}
          >
              </TextInput>

              <TextInput placeholder='Age' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
       
          }}
          defaultValue={age}
          ></TextInput>

          <TextInput placeholder='Department' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
          }}
          defaultValue={department}
          ></TextInput>

<TextInput placeholder='Semester' style={styles.input} selectionColor={"blue"} 
                onChangeText={(text)=>{
                name = text;
                
          }}
          defaultValue={semester}
          ></TextInput>

          

          


          <TouchableOpacity style={[styles.AddButton,{backgroundColor:'#797ef6'}]} 
        onPress={
          ()=>{
            console.log(name);
        }}
        activeOpacity={0.5} 
        >
          <Text style={{fontFamily:"Bold",color:"white",fontSize:25}}>Edit</Text>

        </TouchableOpacity>
            </ScrollView>

            
            



        </View>
    )
}


const styles = StyleSheet.create({
    list:{
      backgroundColor:"#ADD8e6",
      marginLeft:"5%",
      marginTop:"3%",
      borderWidth:2,
      width:"90%",
      padding:"3%",
      borderRadius:10,
      borderColor:"blue"
    },
    AddButton:{
    
      width:"50%",
      backgroundColor:"#4adede",
      padding:"3%",
      alignItems:"center",
      marginTop:25,
      borderRadius:45,
      marginLeft:"25%",
      
    },
    
    input:{
        marginLeft:"5%",
        borderWidth:1,
        borderColor:"blue",
        paddingLeft:6,
        height:40,
        marginTop:5,
        width:"70%",
        fontSize:15,
        borderRadius:10,
        fontFamily:"Bold",
        color:"#3f05ff",
        marginTop:30
      
      
    },
    
  
  });