import React,{Component} from "react";
import { Image, Text, View ,FlatList} from "react-native";
import { connect } from "react-redux";
import CartCard from "../../Component/CartCard";
import NonScroll from "../../Component/NonScroll";

class Cart extends Component{
    
    render(){
        console.log(this.props.cardArray);
        return(
            <View>
                <NonScroll name="Cart"/>
                <View>
                <FlatList
              data={this.props.cardArray}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => (
                <View style={{marginBottom: 10}}></View>
              )}
              renderItem={({item}) => (
                <CartCard data={item} ></CartCard>
              )}
            />
                </View>
            </View>
        )
    }
}
const mapStateToProps=state=>{
    return{
        cardArray:state.cardArray
    }
}
export default connect(mapStateToProps)(Cart)