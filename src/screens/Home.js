import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

import Menu from '../components/Menu'

const Home = (props) => {
    const discription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, eos."
    return (
      <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
          <Image 
          style={styles.headerImage}
          resizeMode='cover'
          source={require("../../assets/logo.jpeg")}/>
        
        <Text style={styles.headerText}>
          Welcome to
        </Text>
        <Text style={[styles.headerText,{fontSize:33,
        color:"blue"}]}>
          {props.appName}
        </Text>
        <Text style={styles.homeDiscription}>{discription}</Text>
        </View>
        <View style={styles.menuStyle}>
          <View style={styles.lineStyle}></View>
          <Menu/>
          <View style={[styles.lineStyle,{marginVertical:25}]}></View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer:{
      height:"100%",
      display:"flex",
      backgroundColor:"red",
      
      justifyContent:"space-between",
      paddingHorizontal:20,
      // backgroundColor: "#fff",
      textAlign: "center",
      backgroundColor:"#f7f8fa",
  
  
    },
    homeTop:{
      
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      paddingHorizontal:10
  
    },
  
    headerImage:{
      height:undefined,
      width:"100%",
      aspectRatio:1,
      display:"flex",
      alignItems:"stretch",
      marginTop:50,
      borderRadius:30,
      marginBottom:30
    },
    headerText:{
      fontSize:30,
      color:"black",
      textTransform:"uppercase",
      fontFamily:" Habibi_400Regular",
      fontWeight:"bold"
    },
    homeDiscription:{
      textAlign:"left",
      color:"#7d7d7d",
      fontSize:24,
      marginTop:30,
      marginLeft:30,
      marginBottom:50,
      lineHeight:26,
      fontFamily:"JosefinSlab_400Regular_Italic"

    },
    lineStyle:{
      marginBottom:20,
      borderColor:"grey",
      borderWidth:1
    }
  });

  export default Home