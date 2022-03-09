import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";


import AppLoading from "expo-app-loading";

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

const UserData = () => {
  let [fontsLoaded] = useFonts({
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

  if (!fontsLoaded) {
    <AppLoading />;
  }

  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const realData = await response.json();
      setMyData(realData);
      setIsLoaded(false);
      // console.log(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getUserData(), []);

  // render the students cards
  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image  style={styles.imgStyle} source={{ uri: item.image }} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> Bio-Data </Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.myName}> Name: {item.name} </Text>
            <Text style={styles.myName}> email: {item.email} </Text>
            <Text style={styles.myName}> mobile: {item.mobile} </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.mainHeader}>List of Students</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={myData}
        renderItem={showUserData}
        horizontal
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
  
    width: "100%",
    // minHeight: "100%",
    paddingVertical: 30,
  
    backgroundColor: "#ebedee",
    
  },
  card: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 10,
    shadowColor: "#00c8ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 8,
    marginVertical: 30,
    marginHorizontal:30,
    
    
    
    
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#00c8ff",
    paddingVertical: 10,
    fontFamily: "ProstoOne_400Regular",
  },
  idNumber: {
    fontSize: 20,
    color: "#ffe7bd",
    fontFamily: "ProstoOne_400Regular",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "ProstoOne_400Regular",
  },
  mainHeader: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontFamily: "ProstoOne_400Regular",
    marginTop:30,
    paddingVertical: 20,
    backgroundColor:"#00c8ff",
    marginHorizontal:30,
    borderRadius:10,
    textShadowRadius:10,
    textShadowColor:"#00466b",
    // textDecorationColor:"blue",
    textShadowOffset:{ width: 10, height: 10 },
    
    
    elevation:8,
    
  },
  imgContainer: {
    paddingBottom: 5,
  },
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 20,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginTop:5,
    marginBottom: 5,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "ProstoOne_400Regular",
  },
 
});

export default UserData;
