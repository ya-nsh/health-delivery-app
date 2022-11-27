import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { selectCartItems, selectCartTotal } from '../features/cartSlice';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const items = useSelector(selectCartItems);
  const navigation = useNavigation();
  const cartTotal = useSelector(selectCartTotal);

  return (
    <View className="absolute bottom-10 w-full z-100">
      <TouchableOpacity className="bg-slate-500 p-3 mx-5 flex-row rounded-lg items-center space-x-1">
        <Text className="text-white font-bold text-lg bg-slate-700 py-2 px-3 mx-3 ">
          {items.length}
        </Text>
        <Text className="text-center text-white bg-slate-700  mx-3 p-6">
          Checkout
        </Text>

        {/* price */}
        <Text className="text-center text-white bg-slate-700 py-3 mx-3 p-6">
          Total: Rs. {cartTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
