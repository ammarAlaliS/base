import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import GlobalStyles from '../components/GlobalStyles';
import {
    UserIcon, 
    ChevronDownIcon, 
    SearchIcon, 
    AdjustmentsIcon,
} from 'react-native-heroicons/outline'




const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView style={GlobalStyles.androidSafeArea}>
            <View className=" flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className=" h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs"> Deliver Now!</Text>
                    <Text className=" font-bold text-xl"> 
                    Current Location
                    <ChevronDownIcon size={20} color="#00CC88"/>
                    </Text>
                 
                </View>
                <UserIcon size={35} color="#00CC88"/>
            </View>
         
        </SafeAreaView>
    );
}

export default HomeScreen

