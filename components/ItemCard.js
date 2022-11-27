import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ItemCard = ({ assetUrl, title, description }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="m-4 flex items-center"
      onPress={() => {
        navigation.navigate('Medicine', {
          title,
          assetUrl,
          description
        });
      }}
    >
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
