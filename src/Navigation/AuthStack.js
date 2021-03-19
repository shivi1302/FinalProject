import React,{Fragment} from "react";
import {} from "react-native";
import {createStackNavigator} from "react-navigation-stack"
import navigationStrings from "../constants/navigationStrings";
import Login from "../Screens/Login/Login";
import SignUp from "../Screens/SignUp/SignUp";

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
        </Fragment>
    )
}

export default AuthStack;