import React from "react";
import {View,StyleSheet, Image,Text} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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
                <ScrollView  horizontal={true}
                showsHorizontalScrollIndicator={false} >
                <View style={{flexDirection:"column"}}>
                    <Image style={styles.imageScroll} source={{uri:"https://blog-images.pharmeasy.in/2020/08/07191055/1596723544759_1596723348023_blog-new-size.jpg"}}></Image>
                    <Image style={styles.imageScroll} source={{uri:"https://blog-images.pharmeasy.in/2020/06/29203759/1593134836408_blog.jpg"}}></Image>
                </View>
                <View style={{flexDirection:"column"}}>
                    <Image style={styles.imageScroll} source={{uri:"https://blog-images.pharmeasy.in/2020/10/18005606/protinex-blog-apprvd1.jpg"}}></Image>
                    <Image style={styles.imageScroll} source={{uri:"https://blog-images.pharmeasy.in/2020/08/24233214/BLOG-NEW-SIZE6.jpg"}}></Image>
                </View>
                <View style={{flexDirection:"column"}}>
                    <Image style={styles.imageScroll} source={{uri:"https://blog-images.pharmeasy.in/2020/05/14153124/blog-02-1-375x195.jpg"}}></Image>
                    <Image style={styles.imageScroll} source={{uri:"https://detwxg7gzm61n.cloudfront.net/2020/05/13000714/In-Blog3.jpg"}}></Image>
                </View>
                <View style={{flexDirection:"column"}}>
                    <Image style={styles.imageScroll} source={{uri:"https://blog-images.pharmeasy.in/2020/08/07191055/1596723544759_1596723348023_blog-new-size.jpg"}}></Image>
                    <Image style={styles.imageScroll} source={{uri:"https://blog-images.pharmeasy.in/2020/06/29203759/1593134836408_blog.jpg"}}></Image>
                </View>
                </ScrollView>
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
          height:120,
          width:200,
          borderRadius:10,
          margin:10
      }
})