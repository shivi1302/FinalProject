import React from "react";
import { Image, View,StyleSheet,Text, TouchableOpacity } from "react-native";
import colors from "../styles/colors";
export default function CartCard(props) {
    const{data,onDelete}= props
    return(
       <View>
            <View style={styles.mainContainer}>
            <View style={{flexDirection:"row"}}>
            <Image style={styles.imageItem} source={{uri:data.image}}/>
            <View style={{flexDirection:"column"}}>
            <Text style={styles.textCart}>{data.name}</Text>
            <Text style={styles.textCart}>Rs. {data.price}</Text>
            <Text style={styles.textCart1}>Rs. {data.mrp}</Text>
            </View>
           <View style={{flexDirection:"row",marginLeft:"auto"}}>
           <TouchableOpacity onPress={() => {
              onDelete(data.id);
            }} style={{borderWidth:1,padding:7,margin:2,height:25,paddingTop:-3,paddingHorizontal:8}}><Text>-</Text></TouchableOpacity>
           <Text style={{margin:2}}>1</Text>
           <TouchableOpacity style={{borderWidth:1,padding:7,margin:2,height:25,paddingTop:-3}}><Text>+</Text></TouchableOpacity>
           </View>
        </View>
        <TouchableOpacity onPress={() => {
              onDelete(data.id);
            }}>
                <Text style={styles.removetext}>Remove</Text>
            </TouchableOpacity>
        </View>
       </View>
    )
}
const styles = StyleSheet.create({
    imageItem:{
        height:100,
        width:80,
        borderRadius:10,
        
    },
    mainContainer:{
        borderWidth:0.25,
        padding:10,
        paddingHorizontal:20,
        margin:10,
        borderRadius:10
    },
    textCart:{
        marginLeft:15
    },
    textCart1:{
        marginLeft:15,
        color:"red",
        textDecorationLine:"line-through"
    },
    removetext:{
        marginLeft:"auto",
        color:colors.themeColor
    }
})