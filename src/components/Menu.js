import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation =useNavigation()
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={()=>navigation.navigate("Cource")}>
          <Image source={require("../../assets/icons/cource.png")} style={styles.imgStyle}/>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={()=>navigation.navigate("Student")}>
          <Image source={require("../../assets/icons/student2.jpg")} style={styles.imgStyle}/>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={()=>navigation.navigate("About")}>
          <Image source={require("../../assets/icons/About.png")} style={styles.imgStyle}/>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={()=>navigation.navigate("Contact")}>
          <Image source={require("../../assets/icons/contact.png")} style={styles.imgStyle}/>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

    menuContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        
    },

    textStyle:{
        textTransform:"capitalize",
        fontSize:23,
        color:"blue"
    },
    imgStyle:{
        width:"100%",
        height:60,
        aspectRatio:1,
        borderRadius:"100%",
     
    },
    buttonStyle:{
        borderRadius:"100%",
        shadowColor: "#00c8ff",
        shadowOffset: { width:0, height: 0 },
        shadowOpacity: 2.5,
        shadowRadius: 10,
        borderColor:"white",
        elevation: 8,
        borderWidth:3
    }
})

export default Menu