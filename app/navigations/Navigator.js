import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import History from '../screens/History';
import Home from "../screens/Home";
import { CreateTaskNav } from './Custome';

const Tab = createMaterialBottomTabNavigator();

export function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#308a6f"
      barStyle={{ backgroundColor: 'transparent' }}
    >
      <Tab.Screen
        name="Homescreen"
        component={CreateTaskNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}