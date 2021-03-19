import React,{Component} from "react";
import { Text, View } from "react-native";
import WrapperClass from "../../Component/WrapperClass";

export default class OTPverify
 extends Component{
    render(){
        return(
            <WrapperClass>
                <Text style={{margin:20}}>
                    OTP Verification
                </Text>
            </WrapperClass>
        )
    }
}