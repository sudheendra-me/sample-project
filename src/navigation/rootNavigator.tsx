import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';

import Onboarding1 from '../screens/Onboarding/onBoardingScreen';
import LoginScreen from '../screens/Auth/loginScreen';
import SignupStep from '../screens/Auth/signUpScreen';
import ForgotPassword from '../screens/Auth/forgotPassword';
import BottomTabNavigator from './bottomTabNavigator';
import { RootState } from '../store';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [initialScreen, setInitialScreen] = useState<keyof RootStackParamList | null>(null);


  useEffect(() => {
    const determineStartScreen = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem('hasLaunched');
        if (hasLaunched === null) {
          await AsyncStorage.setItem('hasLaunched', 'true');
          setInitialScreen('Onboarding1');
        } else {
          setInitialScreen(isLoggedIn ? 'MainTabs' : 'Login');
        }
      } catch (e) {
        console.error('Error checking first launch:', e);
        setInitialScreen('Login'); // fallback
      }
    };

    determineStartScreen();
  }, [isLoggedIn]);

  if (!initialScreen) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00aa88" />
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName={initialScreen} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupStep} />
      <Stack.Screen name="Forgot" component={ForgotPassword} />
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
