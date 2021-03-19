import React from 'react';
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
export default function NonScroll(props){
  const {name}= props
  const navigation = useNavigation();
    return(
        <View style={{backgroundColor:colors.themeColor}}>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.textStyle}>{name}</Text>
            <Image source={imagePath.specialOffer} style={styles.imageStyle1} />
            <TouchableOpacity onPress={() =>
            navigation.navigate(navigationStrings.CART)
          }>
            <Image source={imagePath.cart} style={styles.imageStyle} />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInStyle}
            placeholder="Search medicines/healthcare products"></TextInput>
        </View>
    )
} 
const styles= StyleSheet.create({
    textStyle: {
        color: colors.white,
        fontFamily: fonts.mainfont,
        fontSize: 15,
        marginTop: 10,
        marginLeft: 10,
      },
      imageStyle: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 20,
        marginTop: 10,
      },
      imageStyle1: {
        height: 27,
        width: 27,
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 10,
        marginTop: 10,
      },
      textInStyle: {
        borderRadius: 10,
        backgroundColor: colors.white,
        margin: 15,
        marginTop: 20,
        paddingLeft: 15,
      },
})