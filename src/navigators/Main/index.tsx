import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ImageList from '@components/pages/ImageList';
import ImageEdition from '@components/pages/ImageEdition';

const Stack = createStackNavigator();

const Main = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ImageList" component={ImageList} />
    <Stack.Screen name="ImageEdition" component={ImageEdition} />
  </Stack.Navigator>
);

export default Main;
