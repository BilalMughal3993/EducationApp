
import { StyleSheet, Text, View ,Image} from 'react-native';
import Home from './src/screens/Home';

import About from './src/screens/About';
import Contact from './src/screens/Contact';
import UserData from "./src/screens/UserData";
import Course from './src/screens/Course';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { 
  Habibi_400Regular 
} from '@expo-google-fonts/habibi'

import { 
  ProstoOne_400Regular 
} from '@expo-google-fonts/prosto-one'

import { 
  useFonts,
  JosefinSlab_100Thin,
  JosefinSlab_100Thin_Italic,
  JosefinSlab_300Light,
  JosefinSlab_300Light_Italic,
  JosefinSlab_400Regular,
  JosefinSlab_400Regular_Italic,
  JosefinSlab_600SemiBold,
  JosefinSlab_600SemiBold_Italic,


} from '@expo-google-fonts/josefin-slab'


import AppLoading from 'expo-app-loading';

export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded]= useFonts({
    Habibi_400Regular,
    JosefinSlab_100Thin,
  JosefinSlab_100Thin_Italic,
  JosefinSlab_300Light,
  JosefinSlab_300Light_Italic,
  JosefinSlab_400Regular,
  JosefinSlab_400Regular_Italic,
  JosefinSlab_600SemiBold,
  JosefinSlab_600SemiBold_Italic,
  ProstoOne_400Regular, 
  
  });
  if(!fontsLoaded)
  {
    <AppLoading/>
  }
  return(
    <NavigationContainer style={{backgroundColor:"Red"}}>
      <Stack.Navigator initialRouteName='Home' >
        {/* Home Screen */}
          
        <Stack.Screen name='Home' options={{
          headerTitleStyle:{
            fontSize:30,
            fontFamily:"ProstoOne_400Regular",
            fontWeight:"600"
            

          },
          headerStyle:{backgroundColor:"#00bfff"},
          headerTitleAlign:"center",
          headerTintColor:"white"
          
          
        }} >
          {(props)=><Home {...props} appName={"Education App"}  />}
        </Stack.Screen>
      

        {/* Contact Screen */}

        <Stack.Screen name='Contact' component={Contact} options={{
          headerTitleStyle:{
            fontSize:30,
            fontFamily:"ProstoOne_400Regular",
            fontWeight:"600"
          },
          headerStyle:{backgroundColor:"#00bfff"},
          headerTitleAlign:"center",
          headerTintColor:"white"}}/>

        {/* Course Screen */}

        <Stack.Screen name='Cource' component={Course} options={{
          headerTitleStyle:{
            fontSize:30,
            fontFamily:"ProstoOne_400Regular",
            fontWeight:"600"
          },
          headerStyle:{backgroundColor:"#00bfff"},
          headerTitleAlign:"center",
          headerTintColor:"white"}}/>

        {/* About Screen */}

        <Stack.Screen name='About' component={About} options={{
          headerTitleStyle:{
            fontSize:30,
            fontFamily:"ProstoOne_400Regular",
            fontWeight:"600"
          },
          headerStyle:{backgroundColor:"#00bfff"},
          headerTitleAlign:"center",
          headerTintColor:"white"}}/>

         {/* UserData Screen */}

         <Stack.Screen name='Student' component={UserData} options={{
          headerTitleStyle:{
            fontSize:30,
            fontFamily:"ProstoOne_400Regular",
            fontWeight:"600"
          },
          headerStyle:{backgroundColor:"#00bfff"},
          headerTitleAlign:"center",
          headerTintColor:"white"}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
          