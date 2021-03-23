import React,{Component} from "react";
import { Image, Text, View ,FlatList,TouchableOpacity} from "react-native";
import { List } from "react-native-paper";
import { connect } from "react-redux";
import CartCard from "../../Component/CartCard";
import NonScroll from "../../Component/NonScroll";
import {DeleteFromCart} from '../../redux/action';
import colors from "../../styles/colors";

class Cart extends Component{
    
    render(){
        let{cardArray} = this.props
        let amount =0
        let discount=0
        for(let i =0;i<cardArray.length;i++){
            amount = cardArray[i].price +amount,
            discount= cardArray[i].mrp +discount
        }
        return(
            <View style={{flex:1,marginBottom:180}}>
                
                <NonScroll name="Cart" counter={this.props.counter}/>
                <View>
                <FlatList
              data={this.props.cardArray}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => (
                <View style={{marginBottom: 10}}></View>
              )}
              renderItem={({item}) => (
                <CartCard data={item} onDelete={this.props.DeleteFromCart} ></CartCard>
              )}
            />
                
               <View style={{marginLeft:20,marginVertical:5}}>
               <Text>
                    TOTAL : Rs. {amount}
                </Text>
                <Text style={{color:"red"}}>
                    TOTAL DISCOUNT : Rs. {discount}
                </Text>

               </View>
                
                </View>
                
                <TouchableOpacity
            style={{
              backgroundColor: colors.themeColor,
              width: 200,
              height: 45,
              borderRadius: 10,
             marginHorizontal:70,
             marginVertical:10
            }}
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
              Place Order
            </Text>
          </TouchableOpacity>
            </View>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        DeleteFromCart : id=> dispatch(DeleteFromCart(id))
    }
}
const mapStateToProps=state=>{
    return{
        cardArray:state.cardArray,
        counter:state.counter
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);