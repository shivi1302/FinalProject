import React,{Component} from "react";
import { Text, View } from "react-native";
import NonScroll from "../../Component/NonScroll";

export default class Notification extends Component{
    render(){
        return(
            <View>
                <NonScroll name="Notification"/>
            </View>
        )
    }
}
