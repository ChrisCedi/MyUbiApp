import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MapsScreen} from '../screens/maps/MapsSceen';
import {PermissionsScreen} from '../screens/permissions/PermissionsScreen';
import {LoadingScreen} from '../screens/loading/LoadingScreen';

export type RootStackParams = {
  LoadingScreen: undefined;
  PermissionsScreen: undefined;
  MapsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="MapsScreen" component={MapsScreen} />
      <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
    </Stack.Navigator>
  );
};
