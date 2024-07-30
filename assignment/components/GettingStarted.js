import React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import styles from '../styles/styles';
 
 const image ={uri :'https://lh3.googleusercontent.com/4zkhGxuzuT_bjxQeQynZcVUtBbr3JWCLYoU9bOIxgy1QQkWRjwjvtckOhQpBQ2lp9LyEsZ4DUcbMQ_N7y5IA26WOQC_rG50vw39AVb0=w300-rw'}
 const GettingStarted = ({ navigation }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
          <View style={styles.container}>
            
            <Text style={styles.title}>FASHION WORLD</Text>
            <Button title='Login' onPress={()=>navigation.navigate('Login')}/>
              <View style={styles.buttonSpacing}/>
          <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
         </View>
         </ImageBackground>
        
      );
      };
export default GettingStarted;
