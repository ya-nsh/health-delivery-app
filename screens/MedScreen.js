import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, selectCartItems } from '../features/cartSlice';
import CartIcon from '../components/CartIcon';

const MedScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const items = useSelector(selectCartItems);

  const {
    params: { title, assetUrl, description }
  } = useRoute();

  const addItemToCart = () => {
    dispatch(addCart({ title, assetUrl, description }));
  };

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        title,
        assetUrl,
        description
      }
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: false
    });
  }, []);

  return (
    <>
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: assetUrl
            }}
            className="w-full h-64 bg-gray-200 p-5"
          />
          <TouchableOpacity
            className="absolute top-12 left-5 p-2 bg-gray-300 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={25} />
          </TouchableOpacity>
        </View>

        <View className="text-bold">
          <View>
            <Text className="font-bold text-2xl">{title}</Text>
            <Text className="text-gray-500">{description}</Text>
            <Text className="text-gray-500 mb-10">Rs. 100</Text>

            <TouchableOpacity className="bg-blue-500 p-5 rounded-md  w-1/2 m-auto ">
              <Text className="text-white text-center" onPress={addItemToCart}>
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MedScreen;
