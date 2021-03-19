import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image,FlatList} from 'react-native';
import Card from '../../Component/Card';
import Crousal from '../../Component/Crousal';
import HomeView from '../../Component/HomeView';
import HorizontalCrousal from '../../Component/HorizontalCrousal';
import NonScroll from '../../Component/NonScroll';
import WrapperClass from '../../Component/WrapperClass';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default class HomePage extends Component {
  state={
    HomeArray:[
      {
        id: 1,
        name: "TOP-GUMMY",
        image:
          "https://cdn01.pharmeasy.in/dam/products_otc/Z16765/top-gummy-immunity-booster-gummies-vitamin-c-zinc-orange-flavour-bottle-of-30-2-1613732632.jpg",
        price: 3299,
        mrp : 154
      },
      {
        id: 2,
        name: "AWLA JUICE",
        image:
          "https://cdn01.pharmeasy.in/dam/products_otc/D92359/everherb-amla-juice-rich-in-vitamin-c-natural-immunity-booster-1l-bottle-2-1600335790.jpg",
        price: 3299,
        mrp : 154
      },
      {
        id: 3,
        name: "FLUEN-IMMUNITY",
        image:
          "https://cdn01.pharmeasy.in/dam/products_otc/U16462/smws-fluen-immunity-booster-syrup-bottle-of-300-ml-2-1599596236.jpg",
        price: 3299,
        mrp : 154
      },
      {
        id: 4,
        name: "HORLICS",
        image:
          "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f6269ab4dc593128b40f021e99c2698e",
        price: 3299,
        mrp : 154
      },
      {
        id: 5,
        name: "TOP-GUMMY",
        image:
          "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b11f3dce3da93b4bb817a04dbaa13a5a",
        price: 3299,
        mrp : 154
      },
      {
        id: 6,
        name: "DETTOL",
        image:
          "https://5.imimg.com/data5/EH/BN/MY-20870485/dettol-antiseptic-liquid-500x500.png",
        price: 3299,
        mrp : 154
      },
      {
        id: 7,
        name: "TOP-GUMMY",
        image:
          "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/d560f1954c1a3200aba2ef4df2774d60",
        price: 3299,
        mrp : 154
      },
      {
        id: 8,
        name: "TOP-GUMMY",
        image:
          "https://assets.pharmeasy.in/web-assets/dist/951a8017.png",
        price: 3299,
        mrp : 154
      },
    ]
  }

  addToCart=()=>{
   
  }
  render() {
    const {HomeArray}= this.state
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
              <FlatList
            data={HomeArray}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: 10 }}></View>
            )}
            renderItem={({ item }) => (
              <Card data={item} onAdd={this.addToCart}></Card>
            )}
          />
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
