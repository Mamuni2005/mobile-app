import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GettingStarted from './components/GettingStarted';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Product from './components/Product';
import FavoriteScreen from './components/FavoriteScreen';
import CartScreen from './components/Cart';
import { ProductProvider } from './components/reducerContext'; 


const StackNav=()=>{
const Stack = createStackNavigator();
return (
  <Stack.Navigator initialRouteName="GettingStarted" screenOptions={{headerShown:false}}>
      
        
        <Stack.Screen name="GettingStarted" component={GettingStarted} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Product" component={Product}/>
        <Stack.Screen name ="FavoriteScreen" component={FavoriteScreen}/>
        <Stack.Screen name="CartScreen" component={CartScreen} />
         </Stack.Navigator>
)
}


  
function App() {
  
  return (
    <ProductProvider>
    <NavigationContainer>
    <StackNav/>
    </NavigationContainer>
    </ProductProvider>
    
  );
    

}

export default App;