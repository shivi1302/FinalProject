import React from "react";
import { View,Text,Image,ScrollView,StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function HorizontalCrousal(props){
    
    return(
        <View>
             <Text style={styles.SubTitle}>Popular Healthcare Products</Text>
            <View style={styles.horizontal}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Image
                  style={styles.image1}
                  source={{
                    uri:
                      'https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-bg-03-glucometer-test-strips-box-of-50-1-1604484376.jpg?dim=224x0&dpr=1.25&q=100',
                  }}
                />
                <Image
                  style={styles.image1}
                  source={{
                    uri:
                      'https://cdn01.pharmeasy.in/dam/products_otc/I01462/seacod-110-cod-liver-oil-capsules-1-1597363375.jpg?dim=224x0&dpr=1.25&q=100',
                  }}
                />
                <Image
                  style={styles.image1}
                  source={{
                    uri:
                      'https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1614586352.jpg?dim=224x0&dpr=1.25&q=100',
                  }}
                />
                <Image
                  style={styles.image1}
                  source={{
                    uri:
                      'https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-calcium-magnesium-vitamin-d3-bottle-of-60-tablets-1.jpg?dim=224x0&dpr=1.25&q=100',
                  }}
                />
                <Image
                  style={styles.image1}
                  source={{
                    uri:
                      'https://cdn01.pharmeasy.in/dam/products_otc/281751/revital-h-health-supplement-capsules-bottle-of-60-2-1614077292.jpg?dim=224x0&dpr=1.25&q=100',
                  }}
                />
                <Image
                  style={styles.image1}
                  source={{
                    uri:
                      'https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-6.1-1612250874.jpg?dim=224x0&dpr=1.25&q=100',
                  }}
                />
                <Image
                  style={styles.image1}
                  source={{
                    uri:
                      'https://cdn01.pharmeasy.in/dam/products_otc/I41645/baidyanath-chyawanprash-special-health-food-jar-of-1-kg-2-1607512660.jpg?dim=224x0&dpr=1.25&q=100',
                  }}
                />
                <Image
                  style={styles.image1}
                  source={{
                    uri:
                      'https://cdn01.pharmeasy.in/dam/products_otc/156765/savlon-antiseptic-disinfectant-liquid-1000-ml-2-1599227907.jpg?dim=224x0&dpr=1.25&q=100',
                  }}
                />
              </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image1: {
        height: 150,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 10,
        marginHorizontal: 5,
        borderWidth: 0,
      },
      SubTitle: {
        fontFamily: fonts.subTitles,
        color: colors.textColor,
        marginLeft: 20,
        marginTop: 20,
        fontSize: 15,
      },
      horizontal:{
          flexDirection:"row"
      }
})