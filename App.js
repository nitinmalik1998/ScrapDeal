import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Screens/Login';
import Otpscreen from './src/Screens/Otpscreen';
import TabNavigation from './src/Navigation/TabNavigation';
import AllCollector from './src/Screens/AllCollector';
import AllVendor from './src/Screens/AllVendor';
import Notification from './src/Screens/Notification';
import Collectorcollection from './src/Screens/Collectorcollection';
import Vendorcollection from './src/Screens/Vendorcollection';
import Collectorscollection2 from './src/Screens/Collectorcollection2';
const Stack = createStackNavigator();

function RootNavigation() {
  return (
<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Otpscreen" component={Otpscreen} options={{headerShown: false}}/>
      <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown: false}}/>
      <Stack.Screen name="AllCollector" component={AllCollector}  options={{headerShown: false}}/>
      <Stack.Screen name="AllVendor" component={AllVendor}  options={{headerShown: false}}/>
      <Stack.Screen name="Notification" component={Notification}  options={{headerShown: false}}/>
      <Stack.Screen name="Collectorcollection" component={Collectorcollection}  options={{headerShown: false}}/>
      <Stack.Screen name="Vendorcollection" component={Vendorcollection}  options={{headerShown: false}}/>
      <Stack.Screen name="Collectorcollection2" component={Collectorscollection2}  options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;