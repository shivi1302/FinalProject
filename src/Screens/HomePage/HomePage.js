import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Crousal from '../../Component/Crousal';
import HomeView from '../../Component/HomeView';
import HorizontalCrousal from '../../Component/HorizontalCrousal';
import NonScroll from '../../Component/NonScroll';
import WrapperClass from '../../Component/WrapperClass';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
export default class HomePage extends Component {
  render() {
    return (
      <WrapperClass>
        <NonScroll name="PharmEasy" />
        <View style={{height:600}}>
        <ScrollView>
        <Crousal/>
            <Image
              style={styles.bannerImage}
              source={{
                uri:
                  'https://cdn.grabon.in/gograbon/images/web-images/uploads/1601479803522/pharmeasy-coupons.jpg',
              }}
            />
            <View style={styles.line} />
           <HorizontalCrousal/>
           <View style={styles.line} />
              <HomeView/>
              <Text style={{height:100}}></Text>
        </ScrollView>
        </View>
      </WrapperClass>
    );
  }
}
const styles = StyleSheet.create({
 
 
  bannerImage: {
    borderRadius: 10,
    height: 200,
    resizeMode: 'contain',
    marginVertical: -20,
    marginHorizontal: 20,
  },
  line: {
    backgroundColor: colors.lineColor,
    height: 10,
    marginVertical: 10,
  },
 
});
