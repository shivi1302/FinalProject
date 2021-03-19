import { NavigationContainer } from "@react-navigation/native";
import React,{Fragment} from "react";
import MainStack from "./MainStack";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
const Stack = createStackNavigator();
Stack.Screen
export default function(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {AuthStack(Stack)}
                {MainStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
