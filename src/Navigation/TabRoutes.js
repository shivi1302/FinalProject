import React from"react";
import { Image } from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import HomePage from "../Screens/HomePage/HomePage";
import Diagnostics from "../Screens/Diagnostics/Diagnostics";
import Account from "../Screens/Account/Account";
import HealthCare from "../Screens/Healthcare/HealthCare";
import Notification from "../Screens/Notifications/Notifications";
import navigationStrings from "../constants/navigationStrings";
import imagePath from "../constants/imagePath";
const Tab = createMaterialBottomTabNavigator();
export default function BottomTabNavigator(){
    return(
        <Tab.Navigator
            initialRouteName={navigationStrings.HOMEPAGE}
            activeColor= "black"
            barStyle={{
                backgroundColor:"white"
            }}
        >
            <Tab.Screen
            name={navigationStrings.HOMEPAGE}
            component={HomePage}
            options={{
                tabBarLabel:"Home",
                tabBarIcon:()=>(
                    <Image style={{height:20,width:20}} source={imagePath.home} >
                            
                    </Image>
                )
            }}
            />
             <Tab.Screen
            name={navigationStrings.HEALTHCARE}
            component={HealthCare}
            options={{
                tabBarLabel:"Healthcare",
                tabBarIcon:()=>(
                    <Image style={{height:20,width:20}} source={imagePath.healthcare} >
                            
                    </Image>
                )
            }}
            />
             <Tab.Screen
            name={navigationStrings.DIAGNOSTICS}
            component={Diagnostics}
            options={{
                tabBarLabel:"Diagnostics",
                tabBarIcon:()=>(
                    <Image style={{height:20,width:20}} source={imagePath.diagnostics} >
                            
                    </Image>
                )
            }}
            />
             <Tab.Screen
            name={navigationStrings.NOTIFICATIONS}
            component={Notification}
            options={{
                tabBarLabel:"Notification",
                tabBarIcon:()=>(
                    <Image style={{height:20,width:20}} source={imagePath.notification} >
                            
                    </Image>
                )}
            }
            />
             <Tab.Screen
            name={navigationStrings.ACCOUNT}
            component={Account}
            options={{
                tabBarLabel:"Account",
                tabBarIcon:()=>(
                    <Image style={{height:20,width:20}} source={imagePath.account} >
                            
                    </Image>
                )
            }}
            />
        </Tab.Navigator>
    )
}