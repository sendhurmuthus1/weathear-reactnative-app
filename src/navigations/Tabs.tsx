import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const icons = {
  home: require('../assets/weather.png'),
};

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Weather Details"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.home}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
