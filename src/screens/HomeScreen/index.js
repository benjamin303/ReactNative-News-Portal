import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';


const HomeScreen = () => {
    const navigation = useNavigation();


    const onLogoutPressed = () => {
        navigation.navigate('SignIn');
      };



    return (
        <View>
            <Text style={{ fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>
            <CustomButton
             text="Logout"
             onPress={onLogoutPressed}
           />
        </View>
    )
}

export default HomeScreen
