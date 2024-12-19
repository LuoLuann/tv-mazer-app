import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import Details from "../screens/Details/details.view";
import Person from "../screens/Person/person.view";

const Stack = createNativeStackNavigator<RoutesParamsList>()

const Routes = () => {
    return (
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Person" component={Person} />
      </Stack.Navigator>
    );
  };
  
  export default Routes;