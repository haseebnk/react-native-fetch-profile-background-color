import  React from "react";
import {View,Text} from "react-native";
import { NavigationContainer , useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import {NotesProvider} from "./src/context/NotesContext"


const Stack = createNativeStackNavigator()


function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="home" component={HomeScreen} options={Header=false  }></Stack.Screen>
      <Stack.Screen name="profile" component={ProfileScreen} options={Header=false  }></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )

}



export default () => {
  return (
    
    <NotesProvider >
    <App/>
  </NotesProvider>
  

  )
}