import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';


const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
            navigation.setOptions({
                headerShown: false,
            })
    }, [])

    return (
        <View className=" flex items-center justify-center flex-1">
            <Text className=" text-red-500 text-3xl">Home Screen</Text>
        </View>
    );
}

export default HomeScreen

