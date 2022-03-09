import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

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

import AppLoading from "expo-app-loading";

const About = () => {
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

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Muhammad Bilal </Text>
      <Text style={styles.paraStyle}> I am a React Native Developer 😀 </Text>

      <View style={styles.imgC}>
        <Image
          style={styles.imgStyle}
          // resizeMode="cotain"
          source={{
            uri: "https://scontent.fisb2-1.fna.fbcdn.net/v/t39.30808-6/265575019_1255791971592788_2631937809650745763_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG9xvOzkrEA5FkdS-MdO7lwqADZu9J25eKoANm70nbl4iJ-KRtGeeE568eEAh8jcK9r68QI6aJbcOjQqG1f_GHY&_nc_ohc=Ebn59ntXXl4AX9UNgpp&_nc_zt=23&_nc_ht=scontent.fisb2-1.fna&oh=00_AT9avreZ_OST29o3ZH1BRFzoNz2EH4B5LHI9xxjMnpR0kQ&oe=622B4FA6",
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor.
        </Text>
      </View>

      <Text style={styles.mainHeaderF}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/bilal_mughalx/")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1646659829~hmac=a448e8f81a67e0e208b7ec100e862424",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://web.facebook.com/bilal.mughal.2000"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://github.com/BilalMughal3993")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/muhammad-bilal-08b644224/")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons.flaticon.com/png/512/1377/premium/1377213.png?token=exp=1646659995~hmac=240c8680c5a65ad52aa9eee3bbdbfe5e"
            }}
          />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    
    
  },
  imgC:{shadowOpacity:2.5,
    shadowOffset:{ width: 0, height: 0 },
    shadowRadius:30,
    borderRadius: "100%",
    shadowColor:"#00c8ff",
    elevation:8,
    borderWidth:4,
  borderColor:"#00c8ff"},
  imgStyle: {
    width: 250,
    height:undefined,
    aspectRatio:1,
    borderRadius: "100%",
    
    //  margin:2,
    
  },
  mainHeader: {
    fontSize: 25,
    color: "#00c8ff",
    textTransform: "uppercase",
    marginTop: 20,
    paddingVertical:20,
    marginBottom: 10,
    fontFamily: "JosefinSlab_600SemiBold,",
    fontWeight:"bold"
    
  },
  mainHeaderF:{
    fontSize:19,
    textTransform:"capitalize",
    color:"#00c8ff",
    padding:10,
    marginHorizontal:10,
    marginBottom:20
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSlab_400Regular_Italic",
  },
  aboutLayout: {
    backgroundColor: "#00c8ff",
    paddingHorizontal: 30,
    marginVertical: 30,
    // marginHorizontal:30,
    // borderRadius:30,
    shadowOpacity:0.5,
    shadowOffset:{ width: 10, height: 10 },
    shadowRadius:10,
    shadowColor:"#00a9c4",
    elevation:8,
    marginTop: 25,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Habibi_400Regular ",
    alignSelf: "center",
    fontWeight:"bold"
  },
  aboutPara: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "JosefinSlab_400Regular_Italic",
    lineHeight: 26,
  },
  menuContainer: {
    width: "80%",
    // height:50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor:"#00c8ff",
    paddingVertical:10,
    borderRadius:40,
    marginBottom:20,
    shadowOpacity:0.5,
    shadowOffset:{ width: 10, height: 10 },
    shadowRadius:10,
    shadowColor:"#00a9c4",
    elevation:8,
  },

  iconStyle: {
    width:"100%",
    height:60,
    borderRadius:"100%",
    aspectRatio:1,
    
  },
});

export default About;
