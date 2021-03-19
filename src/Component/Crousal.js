import React from "react";
import {View,Image,StyleSheet} from "react-native";
export default function Crousal(props){
    return(
        <View style={styles.horizontal}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    'https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEA21-FLAT-ON-APAYT41019BCB6/0x1920/70/1.jpg',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri:
                    'https://image.winudf.com/v2/image1/Y29tLnBob25lZ2FwLnJ4cGFsX3NjcmVlbl8yXzE1ODk5OTkzMTRfMDQz/screen-3.jpg?fakeurl=1',
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri:
                    'https://image.winudf.com/v2/image1/Y29tLnBob25lZ2FwLnJ4cGFsX3NjcmVlbl81XzE1NzM3MTkwMTNfMDM4/screen-7.jpg?fakeurl=1&h=500',
                }}
              />
            </View>
    )
}

const styles= StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
        marginHorizontal: 15,
      },
      image: {
        height: 250,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 10,
        marginHorizontal: 5,
        borderWidth: 0,
      },
})