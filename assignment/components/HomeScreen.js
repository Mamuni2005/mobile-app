

import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
import styles from '../styles/styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../components/FavoriteScreen';
import Product from'../components/Product';
import Home from '../components/Home';
import Cart from '../components/Cart';

const Bottom = createBottomTabNavigator();
const Welcome = () => {
  return (
    <Bottom.Navigator>

    <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
         
        }}
      />
    
      
     <Bottom.Screen
        name="Product"
        component={Product}
        options={{
          headerShown: false,
         
        }}
      />
    

      <Bottom.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerShown: false,
         
        }}
      />
    

      <Bottom.Screen
        name="Add To Cart"
        component={Cart}
        options={{
          headerShown: false,
         
        }}
      />
    
    </Bottom.Navigator>
  );
};


export default Welcome;