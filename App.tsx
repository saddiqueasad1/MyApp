import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import UsersListScreen from './src/screens/UsersListScreen';
import {Provider} from 'react-redux';
import store from './src/store/store';
import TodoListScreen from './src/screens/TodoListScreen';
// import { TodoProvider } from './src/services/slices/TodoContext';

const Stack = createNativeStackNavigator();

const App = ({}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false, title: 'Login'}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: true, title: 'Home'}}
          />
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{headerShown: true, title: 'Details'}}
          />
          <Stack.Screen
            name="UsersListScreen"
            component={UsersListScreen}
            options={{headerShown: true, title: 'Users'}}
          />
          <Stack.Screen
            name="TodoListScreen"
            component={TodoListScreen}
            options={{headerShown: true, title: 'Users'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
