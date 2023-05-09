import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerTintColor:'orange'                
            }}
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerBackTitleVisible:false,                
                }}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible:false,               
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor:'orange',
                headerTintColor:'orange',          
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel:'Inicio',
                    tabBarIcon:({color,size}) => (
                       <Entypo name="home" size={size} color={color} />
                    ),
                    headerTitle:"Inicio",
                    headerShown:false
                
                }} 
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    tabBarLabel:'Configuracion',
                    tabBarIcon:({color,size}) => (
                       <Entypo name="tools" size={size} color={color} />
                    ),
                    headerTitle:"Configuracion",
                }}  
            />        
        </Tab.Navigator>
    )
}

export default function Navigation (){
    return (
        <NavigationContainer>
            <StatusBar style="dark" />
            <MyTabs/>
        </NavigationContainer>
    );
}