import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import Feed from "../pages/Feed";
import RecoverPassword from "../pages/Recoverpassword";

const Routes = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="DrawerFeed"
          component={Feed}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Marketplace"
          component={Feed}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Orders"
          component={Feed}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Feed"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecoverPassword"
        component={RecoverPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
