import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Screens
import HomeScreen from './screens/homeScreens';
import RegisterScreen from './screens/registerSreens';
import LoginScreen from './screens/loginScreens';
import stackScreen from './screens/stackScreens';
import ClaveScreens from './screens/ClaveScreens';
import FalloScreens from './screens/FalloScreens';
import EstrategiasCards from './screens/EstrategiasCards';
import EstrategiasCreate from './screens/EstrategiasCreate';
import EstrategiasScreens from './screens/EstrategiasScreens';

const Tab = createMaterialBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator
        initialRouteName='HomeScreen'
        >
            <HomeStackNavigator.Screen 
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen 
                name="Register"
                component={RegisterScreen}
            />
            <HomeStackNavigator.Screen 
                name="ClaveScreens"
                component={ClaveScreens}
            />
            <HomeStackNavigator.Screen 
                name="EstrategiasCreate"
                component={EstrategiasCreate}
            />
            <HomeStackNavigator.Screen 
                name="EstrategiasCards"
                component={EstrategiasCards}
            />
            <HomeStackNavigator.Screen 
                name="EstrategiasScreens"
                component={EstrategiasScreens}
            />
            <HomeStackNavigator.Screen 
                name="FalloScreens"
                component={FalloScreens}
            />
        </HomeStackNavigator.Navigator>
    )
}

function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarOptions: {
                style: {
                    backgroundColor: '#BB8FCE',
                },
            },
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={MyStack} 
            options={{ tabBarLabel:'Inicio',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
            />
            <Tab.Screen 
            name="RegisterScreens" 
            component={RegisterScreen} 
            options={{ tabBarLabel:'Registro',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="tooltip-account" color={color} size={26} />
              ),}}
            />
            <Tab.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ tabBarLabel:'Login',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="login" color={color} size={26} />
              ),}}
            />

            {/* <Tab.Screen 
            name="FalloScreens" 
            component={FalloScreens} 
            options={{ tabBarLabel:'Falla',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="close-circle" color={color} size={26} />
              ),}}
            />   */}

            {/* <Tab.Screen 
            name="EstrategiasCreate" 
            component={EstrategiasCreate} 
            options={{ tabBarLabel:'EstrategiasC',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="file-check" color={color} size={26} />
              ),}}
            />    */}

               {/* <Tab.Screen 
            name="EstrategiasCards" 
            component={EstrategiasCards} 
            options={{ tabBarLabel:'Cards',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="file-check-outline" color={color} size={26} />
              ),}}
            />    */}

              {/* <Tab.Screen 
            name="ClaveScreens" 
            component={ClaveScreens} 
            options={{ tabBarLabel:'Clave',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="login-variant" color={color} size={26} />
              ),}}
            />    */}

            <Tab.Screen 
            name="EstrategiasScreens" 
            component={EstrategiasScreens} 
            options={{ tabBarLabel:'Estrategias',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="checkerboard-plus" color={color} size={26} />
              ),}}
            />     


        </Tab.Navigator>
    );
}


export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}