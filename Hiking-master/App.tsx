import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StyleSheet, useColorScheme} from 'react-native';
import LoginScreen from './src/Screens/Login';
import SignupScreen from './src/Screens/Signup';
import HomeScreen from './src/Screens/Home';
import TrailDiscoveryScreen from './src/Screens/Trial';
import FilterSearchScreen from './src/Screens/FilterSearch';
import WeatherInformationScreen from './src/Screens/Weather';
import SafetyTipsScreen from './src/Screens/Safety';
import EmergencyServicesScreen from './src/Screens/Emergency';
import HikersScreen from './src/Screens/Hikers';
import PlanHike from './src/Screens/PlanHike';
import ProgressTrackerScreen from './src/Screens/ProgressTracker';
import HikePlannerScreen from './src/Screens/HikePlanner';

function App(): React.JSX.Element {
  const [initialRoute, setInitialRoute] = useState('login');
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}>
          <Stack.Screen
            options={{headerShown: false}}
            name="login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="signup"
            component={SignupScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="trial"
            component={TrailDiscoveryScreen}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="filter"
            component={FilterSearchScreen}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="weather"
            component={WeatherInformationScreen}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="safety"
            component={SafetyTipsScreen}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="emergency"
            component={EmergencyServicesScreen}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="hiker"
            component={HikersScreen}
          />
            <Stack.Screen
            options={{headerShown: true}}
            name="plan"
            component={PlanHike}
          />
              <Stack.Screen
            options={{headerShown: true}}
            name="progress"
            component={ProgressTrackerScreen}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="planner"
            component={HikePlannerScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
