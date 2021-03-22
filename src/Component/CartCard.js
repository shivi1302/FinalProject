import React from "react";
import { Image, View,StyleSheet,Text, TouchableOpacity } from "react-native";
import colors from "../styles/colors";
export default function CartCard(props) {
    const{data}= props
    return(
        <View style={styles.mainContainer}>
            <View style={{flexDirection:"row"}}>
            <Image style={styles.imageItem} source={{uri:data.image}}/>
            <View style={{flexDirection:"column"}}>
            <Text style={styles.textCart}>{data.name}</Text>
            <Text style={styles.textCart}>Rs. {data.price}</Text>
            <Text style={styles.textCart1}>Rs. {data.mrp}</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.removetext}>Remove</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageItem:{
        height:80,
        width:80
    },
    mainContainer:{
        borderWidth:0.25,
        padding:10,
        paddingHorizontal:20,
        margin:10,
        borderRadius:10
    },
    textCart:{
        marginLeft:10
    },
    textCart1:{
        marginLeft:10,
        color:"red",
        textDecorationLine:"line-through"
    },
    removetext:{
        marginLeft:50,
        color:colors.themeColor
    }
})