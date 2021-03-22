import React,{Component} from "react";
import { Image, Text, View ,FlatList} from "react-native";
import { connect } from "react-redux";
import CartCard from "../../Component/CartCard";
import NonScroll from "../../Component/NonScroll";
import {DeleteFromCart} from '../../redux/action';
class Cart extends Component{
    
    render(){
        return(
            <View>
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
                </View>
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