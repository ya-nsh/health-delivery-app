import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
// import { ScrollView } from 'moti';
import ItemCard from './ItemCard';

const GenericRow = ({ title, description }) => {
  return (
    <View className="my-4 p-4">
      <View className="mt-2 flex-row items-center justify-between px-2">
        <Text className="text-2xl font-bold ">{title}</Text>
        <ArrowRightIcon />
      </View>

      <Text className="font-lg px-2 text-gray-700">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="mt-5 pt-5"
      >
        <ItemCard
          assetUrl="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/nhylvyk0jwacm05rcowg.jpg"
          title="Zandu Pure Honey"
        />
        <ItemCard
          assetUrl="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c67b03de5ea740c49802a3ec78752ba7.jpg"
          title="Tata 1mg Jamun Juice"
        />
        <ItemCard
          assetUrl="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/xtviqxca9mu8jjunyir4.jpg"
          title="BD Ultrafine Insulin Syringe"
        />
        <ItemCard
          assetUrl="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/udvui669qqvium77njrk.jpg"
          title="Antiseptic Cream"
        />
        <ItemCard
          assetUrl="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/udvui669qqvium77njrk.jpg"
          title="Thermometer"
        />
      </ScrollView>
    </View>
  );
};

export default GenericRow;
