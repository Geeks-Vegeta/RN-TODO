import { StyleSheet, StatusBar, Text } from 'react-native';
import { Navigator } from "./app/navigations/Navigator";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import TaskContext from './app/components/TaskContext';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};



export default function App() {
  return (
    <>
    <TaskContext>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
            <StatusBar />
            <Navigator/>
        </NavigationContainer>
      </PaperProvider>
    </TaskContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
