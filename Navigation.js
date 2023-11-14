import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons,MaterialCommunityIcons  } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

//screens
import HomeScreen from "./screens/HomeScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerTintColor:'#AF71FF'                
            }}
        >
            <HomeStackNavigator.Screen
                name="Gatitos"
                component={HomeScreen}
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
                tabBarActiveTintColor:'#AF71FF',
                headerTintColor:'#AF71FF',          
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel:'Gatitos',
                    tabBarIcon:({color,size}) => (
                    <MaterialCommunityIcons name="cat" size={size} color={color} />
                    ),
                    headerTitle:"Inicio",
                    headerShown:false
                
                }} 
            />
            <Tab.Screen 
                name="favorites" 
                component={FavoriteScreen}
                options={{
                    tabBarLabel:'Favoritos',
                    tabBarIcon:({color,size}) => (
                        <MaterialIcons name="favorite" size={size} color={color} />
                    ),
                    headerTitle:"Favoritos",
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