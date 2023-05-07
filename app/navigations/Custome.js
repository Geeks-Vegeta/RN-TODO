import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Create from "../screens/Create"

const Stack = createStackNavigator();  // creates object for Stack Navigator

const CreateTaskNav = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
         <Stack.Screen name="Create" options={{headerTitleStyle: {color:'white'},
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor:'#48a84d', 
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10},
        headerTintColor: '#446970',}}  component={Create} />
      </Stack.Navigator>
    );
  }

export { CreateTaskNav }