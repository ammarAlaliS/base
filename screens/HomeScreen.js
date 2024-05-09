import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image} from 'react-native';
import GlobalStyles from '../components/GlobalStyles';




const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView style={GlobalStyles.androidSafeArea}>
            <View>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className=" h-7 w-7 bg-gray-300"
                >
                </Image>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen

