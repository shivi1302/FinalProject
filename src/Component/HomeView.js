import React from "react";
import {View,StyleSheet, Image,Text} from "react-native";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function HomeView(props){
    return(
        <View style={styles.mainContainer}>
            <View style={styles.rowDir}>
                <Image style={styles.image} source={imagePath.immunity}></Image>
                <Text style={styles.SubTitle}>Immunity boosters</Text>
            </View>
            <View style={styles.rowDir}>
                <View style={{flexDirection:"column"}}>
                    <Image style={styles.imageScroll} source={"https://blog-images.pharmeasy.in/2020/06/29203759/1593134836408_blog.jpg"}></Image>
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    mainContainer:{
        backgroundColor:colors.homeColor,
        padding:10
        
    },
   image:{
        height:50,
        width:50,
    },
    SubTitle: {
        fontFamily: fonts.subTitles,
        color: colors.textColor,
        marginLeft: 20,
        marginTop: 10,
        fontSize: 20,
      },
      rowDir:{
          flexDirection:"row"
      },
      imageScroll:{
          height:100,
          width:100,
          resizeMode:"contain"
      }
})