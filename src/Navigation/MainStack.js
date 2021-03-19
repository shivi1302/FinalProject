import React,{ Fragment } from "react";
import { createStackNavigator } from "react-navigation-stack";
import navigationStrings from "../constants/navigationStrings";
import Account from "../Screens/Account/Account";
import Diagnostics from "../Screens/Diagnostics/Diagnostics";
import HealthCare from "../Screens/Healthcare/HealthCare";
import HomePage from "../Screens/HomePage/HomePage";
import Notification from "../Screens/Notifications/Notifications";
import BottomTabNavigator from "./TabRoutes";
function MainStack(Stack){
    return(
        <Fragment>
            <Stack.Screen
            component={HomePage}
            options={{
                headerShown: false
            }}
            name={navigationStrings.HOMEPAGE}
            />
            <Stack.Screen
            component={Account}
            options={{
                headerShown: false
            }}
            name={navigationStrings.ACCOUNT}
            />
            <Stack.Screen
            component={Notification}
            options={{
                headerShown: false
            }}
            name={navigationStrings.NOTIFICATIONS}
            />
            <Stack.Screen
            component={HealthCare}
            options={{
                headerShown: false
            }}
            name={navigationStrings.HEALTHCARE}
            />
            <Stack.Screen
            component={Diagnostics}
            options={{
                headerShown: false
            }}
            name={navigationStrings.DIAGNOSTICS}
            />
        </Fragment>
    )
}

export default MainStack;