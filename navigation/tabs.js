import React from "react";
import {Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home} from "../screens";
import {COLORS, icons} from "../constants";


const Tab = createBottomTabNavigator();

const tabOptions = {

    showLabel: false,
    style : {

        height: "15%",
        backgroundColor: COLORS.black
    }

}


const Tabs = () => {

    return (
    <Tab.Navigator

        // tabBarOptions = {tabOptions}
        screenOptions = {({route}) => ({
            tabBarIcon: ({focused}) => {
                const tintColor = focused ? COLORS.black: COLORS.gray;

                switch(route.name) {

                    case "Home":

                    return (
                        <Image
                            source = {icons.dashboard}
                            resizeMode = "contain"
                            style = {{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                            }}
                        />
                    )

                        case "Search":

                        return (
                            <Image
                                source = {icons.search_icon}
                                resizeMode = "contain"
                                style = {{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )

                        case "Notification":

                        return (
                            <Image
                                source = {icons.notification}
                                resizeMode = "contain"
                                style = {{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )


                        case "Menu":

                        return (
                            <Image
                                source = {icons.menu_icon}
                                resizeMode = "contain"
                                style = {{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
                }
            }
        })}


            >

                 <Tab.Screen
                    name = "Home"
                    component = {Home}
                    
                    />
                <Tab.Screen
                    name = "Search"
                    component = {Home}
                />  


                <Tab.Screen
                    name = "Notification"
                    component = {Home}
                    
                /> 
                
                <Tab.Screen
                    name = "Menu"
                    component = {Home}
                    
                /> 


    </Tab.Navigator>
    )
}


export default Tabs;