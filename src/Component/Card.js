import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Image,StyleSheet,TouchableOpacity,Text } from "react-native";
import { connect } from "react-redux";

import navigationStrings from "../constants/navigationStrings";
import { AddToCart } from "../redux/action";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function Card(props) {
    const navigation = useNavigation();
    const {data,onAdd}=  props
  
    return(
        <View
        style={{
          margin: 15,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(navigationStrings.DETAILPAGE, { shivi: data })
          }
        >
          <Image style={styles.mainImage} source={{ uri: data.image }}></Image>
        </TouchableOpacity>
        <Text style={styles.mainName}>{data.name}</Text>
        
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Rs.{data.price}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              onAdd(data);
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  const styles = StyleSheet.create({
    mainImage: { height: 200, width: 150, borderRadius: 10 },
    mainName: { textAlign: "center", fontFamily:fonts.subTitles, color:colors.textColor,marginTop:10 },
    button: {
      backgroundColor: colors.themeColor,
      margin: 30,
      marginTop: 10,
      marginLeft: 20,
      width: 100,
      height: 40,
      borderRadius: 10,
    },
    buttonText: {
      textAlign: "center",
      color: "white",
      fontWeight: "bold",
      padding:5,
      fontSize: 15,
    },
  });