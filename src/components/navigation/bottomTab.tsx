import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartIcon from '../../assets/icons/cart';
import HeartIcon from '../../assets/icons/heart';
import HomeIcon from '../../assets/icons/home';
import UserIcon from '../../assets/icons/user';

import CartScreen from '../../screens/cart';
import FavouritesScreen from '../../screens/favourites';
import ProductListScreen from '../../screens/products/list';
import ProfileScreen from '../../screens/profile';
import { useCart } from '../../context/cart';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
  const { uniqueItemCount } = useCart();

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
              icon = (
                <View>
                  <CartIcon color={focused ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR} size={iconSize} />
                  {uniqueItemCount > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{uniqueItemCount}</Text>
                    </View>
                  )}
                </View>
              );
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
         tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            activeOpacity={0.7}
            style={[props.style]}
          >
            {props.children}
          </TouchableOpacity>
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
  badge: {
    position: 'absolute',
    top: -10,
    right: -12,
    backgroundColor: '#3C4856',
    borderRadius: 24,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    zIndex: 10,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10.22,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 17.04,
  },
});

export default BottomTabs;