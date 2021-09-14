import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Explore, Cart, Profil, Login, Pencarian } from '../pages';
import ButtonNavigator from './ButtonNavigator';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Appload = () => {
    return (
        <Tab.Navigator tabBar={props => <ButtonNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Tab.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}


const Router = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Appload" component={Appload} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Pencarian" component={Pencarian} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
