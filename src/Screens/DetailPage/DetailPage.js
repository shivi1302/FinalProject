import React,{Component} from "react";
import { Text, View,StyleSheet ,ScrollView,Image,TouchableOpacity} from "react-native";
import NonScroll from "../../Component/NonScroll";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";
import colors from "../../styles/colors";

export default class DetailPage extends Component{
    render(){
        let item = this.props.route.params.shivi;
        const { navigation } = this.props;
        return(
            <View style={{flex:1}}>
<NonScroll name="Details Page"/>
<View style={{ flexDirection: "row", marginHorizontal: 10}}>
          
        </View>
                <ScrollView>
          <Image
            style={styles. mainImage}
            source={{ uri: item.image }}
          />
          <Text
            style={styles.mainText}
          >
            {item.name}
          </Text>
  <View style={{ flexDirection: "row" }}>
            <Text
              style={styles.price}
            >
              Rs. {item.price}
            </Text>
            
        
          </View>
          <Text style={{
                marginLeft: 14,
                marginTop: 0,
                fontSize: 15,
                color:"green"
              }}> Savings: - Rs.{item.mrp}</Text>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 10,
              color: "gray",
              marginTop: 5,
            }}
          >
            Prices inclusive of all taxes.
          </Text>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              flexWrap: "wrap",
              borderWidth: 2,
              borderRadius: 10,
              marginTop: 10,
              borderColor: `#dcdcdc`,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              Get Up To Extra 30% Off on Rs. 1490 and Above On Your First
              Purchase.
            </Text>
            <View style={{ backgroundColor: `#dcdcdc`, padding: 10,borderRadius:10,marginTop:5 }}>
              <Text style={{ color: "#696969" }}>Use Code FIRSTBUY</Text>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              color: "#6495ed",
              marginLeft: "auto",
              fontSize: 13,
              marginTop: 5,
              marginHorizontal: 20,
            }}
          >
            + 7 More Offers
          </Text>
          <View
            style={{
              backgroundColor: `#dcdcdc`,
              width: "100%",
              height: 5,
              marginTop: 10,
            }}
          ></View>
      

          
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 20,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Delivery Details
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#6495ed",
                marginLeft: "auto",
                fontSize: 13,
                marginTop: 25,
                marginHorizontal: 20,
              }}
            >
              Check delivery date
            </Text>
          </View>

          <View
            style={{
              backgroundColor: `#dcdcdc`,
              width: "100%",
              height: 5,
              marginTop: 10,
            }}
          ></View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Returns
          </Text>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 13,
              color: "gray",
              marginTop: 5,
            }}
          >
            Easy 30 days return and exchange.Return Policies may vary based on
            products and promotions. For full details on your Returns Policies.
          </Text>
        </ScrollView>
        <View>
        <TouchableOpacity
            style={{
              backgroundColor: colors.themeColor,
              width: 200,
              height: 45,
              borderRadius: 10,
             marginHorizontal:70,
             marginVertical:10
            }}
            onPress={() =>
              {navigation.navigate(navigationStrings.HOMEPAGE, {
                screen: navigationStrings.HOMEPAGE,
                params: { addedProduct: item},
              })}
            }
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                paddingTop: 10,
                fontSize: 15,
              }}
            >
              Add to Bag
            </Text>
          </TouchableOpacity>
        </View>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    mainImage:{
        height: 400,
        width: 400,
        resizeMode: "contain",
        marginLeft: -20,
        marginVertical: 20,
      },
      mainText:{
        marginLeft: 20,
        fontSize: 15,
        color: "#696969",
        fontWeight: "bold",
      },
      price:{
        marginLeft: 20,
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 18,
      }
})