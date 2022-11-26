import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';
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
    </SafeAreaView>
  );
};

export default HomeScreen;
