
import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, ImageBackground, Button, ScrollView,TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import { useProduct } from '../components/reducerContext';  // Import the useProduct hook
import Icon from 'react-native-vector-icons/Octicons';

const Product = ({ catagory }) => {
  const { state, dispatch } = useProduct();  // Use the product context
  const favorites = state.favorite;
  
 
 const items = [
  { id: '1', title: "Floral Yoke Design Kurta Set", price: "1239", image: "https://www.libas.in/cdn/shop/files/blue-yoke-design-cotton-anarkali-kurta-with-trousers-and-dupatta-libas-1.jpg?v=1713522725&width=1080" },
    { id: '2', title: "Libas Pure Cotton Kurta Set", price: "2999", image: "https://assets.ajio.com/medias/sys_master/root/20230916/nA5k/6504d872afa4cf41f5ea9290/-473Wx593H-466586735-mustard-MODEL.jpg" },
    { id: '3', title: "Titan Raga Women White Brass Dial & Rose Gold Toned Straps Watch'", price: "1999", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfvhNbGL3rjsJZ1GfYM0_fB3tLFNBZApYeSycBc_njtCRzxFwe6AM7b_QII0dWbDzClVKCRh9VCQa1cb1NbEl-T6mH59ScC6xG0AE8HbN5m_u2lioHtRNNZw" },
    { id: '4', title: "Michael Kors watch", price: "5999", image: "https://www.anguscoote.com.au/content/products/michael-kors-parker-ladies-watch-5555028-108930.jpg" },
    { id: '5', title: "Lakme 9 to 5 lipstick", price: "499", image: "https://www.lakmeindia.com/cdn/shop/files/29545_H-8901030953248_1000x.jpg?v=1689832173" },
      { id: '6', title: "Mamaearth Soft Matte Lipstick", price: "359", image: "https://m.media-amazon.com/images/I/61U3MLn4K1L.AC_UF1000,1000_QL80.jpg" },
  ]

  const toggleFavorite = (itemID) => {
    const isFavorite = favorites.find(favItem => favItem.id === itemID);
    dispatch({
      type: isFavorite ? 'REMOVE_FROM_FAVORITE' : 'ADD_TO_FAVORITE',
      payload:itemID,
    });
  };

  const toggleCart = (itemID) => {
    const isInCart = state.cart.find(cartItem => cartItem.id === itemID);
    dispatch({
      type: isInCart ? 'REMOVE_FROM_CART' : 'ADD_TO_CART',
      payload: itemID,
    });
  };

  return (
    <View style={{flex:1}}>
       <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
             <View style={styles.card}>
       <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <TouchableOpacity onPress={()=> toggleFavorite(item)} style={styles.hearto}>
     <Icon 
      name="feed-heart"
      size = {30}
      color="#000"/>
      </TouchableOpacity>
            <View style={styles.buttonSpacing} />
            <Button title='Add to Cart' onPress={() => toggleCart(item)} />
          </View>
          )}
      />
      </View>
  );
};

export default Product;

