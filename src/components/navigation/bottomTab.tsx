import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartIcon from '../../assets/icons/cart';
import HeartIcon from '../../assets/icons/heart';
import HomeIcon from '../../assets/icons/home';
import UserIcon from '../../assets/icons/user';

import CartScreen from '../../screens/cart';
import FavouritesScreen from '../../screens/favourites';
import ProductListScreen from '../../screens/products/list';
import ProfileScreen from '../../screens/profile';

const Tab = createBottomTabNavigator();

const ACTIVE_BG_COLOR = '#60B5FF';
const ACTIVE_ICON_COLOR = '#FFFFFF';
const ACTIVE_LABEL_COLOR = '#60B5FF';
const INACTIVE_ICON_COLOR = '#000000';
const INACTIVE_LABEL_COLOR = '#49454F';

const IconWithBackground: React.FC<{ active: boolean; children: React.ReactNode }> = ({ active, children }) => (
  <View style={[styles.iconWrapper, active && { backgroundColor: ACTIVE_BG_COLOR }]}>
    {children}
  </View>
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const iconSize = 24;

          let icon;
          switch (route.name) {
            case 'Home':
              icon = <HomeIcon color={focused ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR} size={iconSize} />;
              break;
            case 'Cart':
              icon = <CartIcon color={focused ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR} size={iconSize} />;
              break;
            case 'Favourites':
              icon = <HeartIcon color={focused ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR} size={iconSize} />;
              break;
            case 'Profile':
              icon = <UserIcon color={focused ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR} size={iconSize} />;
              break;
          }

          return <IconWithBackground active={focused}>{icon}</IconWithBackground>;
        },
        tabBarLabel: ({ focused }) => (
          <Text style={[styles.label, { color: focused ? ACTIVE_LABEL_COLOR : INACTIVE_LABEL_COLOR }]}>
            {route.name}
          </Text>
        ),
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 90,
          paddingBottom: 10,
          paddingTop: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={ProductListScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 56,
    height: 32,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
  label: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 500,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
});

export default BottomTabs;