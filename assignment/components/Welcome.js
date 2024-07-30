import React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import GettingStarted from '../components/GettingStarted';
import { TabRouter } from '@react-navigation/native';
import styles from '../styles/styles';

const image ={ uri :"https://st.depositphotos.com/1032577/4812/i/950/depositphotos_48129893-stock-photo-frame-with-daisies-and-lettering.jpg"}
const Drawer = createDrawerNavigator();

const MainScreen=()=>{
    return(
      
  
        <Drawer.Navigator>
            <Drawer.Screen  
             name='HomeScreen'
             component={HomeScreen}
             options={{headerShown:false}}/>
             <Drawer.Screen
             name='LogOut'
             component={GettingStarted}
             options={{headerShown:false}}/>
        </Drawer.Navigator>
        
    );
};

export default MainScreen;