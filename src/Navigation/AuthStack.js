import React,{Fragment} from "react";
import {} from "react-native";
import {createStackNavigator} from "react-navigation-stack"
import navigationStrings from "../constants/navigationStrings";
import { OTPverify, SignUp } from "../Screens";
import Login from "../Screens/Login/Login";


function AuthStack (Stack){
    return(
        <Fragment>
            <Stack.Screen
             component={Login}
             options={{
                 headerShown:false
             }}
             name={navigationStrings.LOGIN}
            />
            <Stack.Screen
             component={SignUp}
             options={{
                 headerShown:false
             }}
             name={navigationStrings.SIGNUP}
            />
               <Stack.Screen
             component={OTPverify}
             options={{
                 headerShown:false
             }}
             name={navigationStrings.OTP}
            />
        </Fragment>
    )
}

export default AuthStack;