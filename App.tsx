import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {withIAPContext} from 'react-native-iap';

import {Home} from './src/screens/Home';
import {UpgradeScreen} from './src/screens/UpgradeScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Upgrade">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Upgrade"
          component={UpgradeScreen}
          options={{title: 'Upgrade Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Wrap the entire app with IAP context
const App = withIAPContext(AppNavigator);

export default App;
