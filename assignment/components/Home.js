import React, {useState} from 'react';
import { View, Text, Button,ImageBackground,TouchableOpacity,Image,FlatList} from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/Entypo';


 const HomeScreen = ({navigation}) => {
  return (
       <View style={{flex:1, backgroundColor:'#000'}}>
           <View style={styles.headers}>
           <TouchableOpacity style={{marginLeft:20}} onPress={()=>{ navigation.openDrawer() }}>
           <Icon name = "menu" size={30} color="#000"/>
           </TouchableOpacity>
           <Text> WELCOME </Text>
           </View>
           
           <Text style={{fontSize:30,alignItems:'center',color:'crimson',alignSelf:'center',fontFamily:'sans-serif',fontWeight:'condensedBold'}}>
              WELCOMES YOU
           </Text>

         
    </View>
      );
      };
export default HomeScreen;