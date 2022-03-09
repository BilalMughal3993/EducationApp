import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'

import Courses from "../api/Courseapi";


const Course = () => {
  const courseCard=({item})=>{
    return(
      <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={item.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mainHeader}>{item.title}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              navigation.navigate("CourseDetails", {
                courseId: item.id,
              })
            }>
            
            <Text style={styles.buttonText}> course Details </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
  return (
    <FlatList
    keyExtractor={(item) => item.id}
    data={Courses}
    renderItem={courseCard}
  />
  )
}


const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 10,
    shadowColor: "#00c8ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: "#1d3d4e",
    textTransform: "uppercase",
    // fontWeight: 500,
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Habibi_400Regular",
    fontWeight:"bold"
  },
  description: {
    textAlign: "left",
    fontFamily: "WorkSans_400Regular",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#00c8ff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    marginTop:8,
    alignItems: "center",
    shadowOpacity:3.5,
    shadowOffset:{ width: 0, height: 0 },
    shadowRadius:20,
    shadowColor:"#00a9c4",
    elevation:8,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontFamily: "WorkSans_400Regular",
    textTransform: "capitalize",
  },
})



export default Course

