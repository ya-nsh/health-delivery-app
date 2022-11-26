import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CategoryCard = ({ title, assetUrl }) => {
  return (
    <TouchableOpacity className="m-4 flex items-center">
      <Image
        source={{
          uri: assetUrl
        }}
        style={{ height: 50, width: 50, borderRadius: 25 }}
      />
      <Text className="font-bold text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
