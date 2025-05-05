import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ForgotPassword from '../screens/Auth/forgotPassword';
import LoginScreen from '../screens/Auth/loginScreen';
import SignupStep from '../screens/Auth/signUpScreen';
import Onboarding1 from '../screens/Onboarding/onBoardingScreen';
import BottomTabNavigator from './bottomTabNavigator';
import { RootState } from '../store';

import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();


const RootNavigator: React.FC = () => {
  const [firstLaunch, setFirstLaunch] = useState<boolean>(true);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (hasLaunched === null) {
        await AsyncStorage.setItem('hasLaunched', 'true');
        setFirstLaunch(true);
      }
    };

    checkFirstLaunch();
  }, []);

  return (
    <React.Suspense fallback={null}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {firstLaunch ? (
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
      ) : isLoggedIn ? (
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupStep} />
          <Stack.Screen name="Forgot" component={ForgotPassword} />
        </>
      )}
    </Stack.Navigator>
    </React.Suspense>
  );
};

export default RootNavigator;
