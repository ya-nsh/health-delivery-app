import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  SparklesIcon
} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row pb-3 space-x-2 items-center mx-2 ">
        <Image
          source={require('../assets/daily-health-app.png')}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
        <View className="flex-[0.9] ">
          <Text className="text-gray-500">Deliver Now</Text>
          <Text className="text-l font-bold">
            Current Location
            <ChevronDownIcon size={15} className="" />
          </Text>
        </View>

        <UserIcon size={30} className="border border-sky-500" />
      </View>
      <View className="flex-row items-cetner space-x-2 pb-2 mx-3 px-3">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SparklesIcon size={15} />
          <TextInput placeholder="Search for Medicine" keyboardType="default" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
