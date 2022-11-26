import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const ItemCard = ({ assetUrl, title, description }) => {
  return (
    <TouchableOpacity className="m-4 flex items-center">
      <Image
        source={{
          uri: assetUrl
        }}
        //   style={{ height: 50, width: 60, borderRadius: 25 }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold">{title}</Text>
      </View>
      <Text className="text-gray-500">{description}</Text>
    </TouchableOpacity>
  );
};

export default ItemCard;
