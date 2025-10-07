import {NavigationContainer} from "@react-navigation/native"
import HomeScreen from "./screens/HomeScreen"
import {createStackNavigator} from "@react-navigation/stack";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Details">
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Details' component={DetailsScreen}/>
          </Stack.Navigator>
    </NavigationContainer>
  )
}