import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { colors } from "../styles/them.json";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Title } from "../styles";

import Home from "../pages/Home";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import Feed from "../pages/Feed";
import RecoverPassword from "../pages/Recoverpassword";
import Cart from "../pages/Cart";

import Marketplace from "../pages/Marketplace";
import Category from "../pages/Marketplace/category";
import Product from "../pages/Marketplace/product";

const Routes = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  const CustomDrawerComponents = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <Title
          bold
          spacing="50px 20px 50px 20px"
          color="light"
          variant="big"
          align="center"
        >
          LOOKAPP
        </Title>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  function DrawerComponents() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerComponents {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: colors.dark,
          drawerActiveTintColor: colors.light,
          drawerInactiveTintColor: colors.muted,
          drawerStyle: {
            backgroundColor: colors.black,
          },
        }}
      >
        <Drawer.Screen
          name="Feed"
          component={Feed}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Icon name="people" color={color} size={20} />
            ),
          }}
        />
        <Drawer.Screen
          name="Marketplace"
          component={Marketplace}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Icon name="tag" color={color} size={20} />
            ),
          }}
        />
        <Drawer.Screen
          name="Orders"
          component={Feed}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Icon name="basket" color={color} size={20} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Cart">
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
        component={DrawerComponents}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecoverPassword"
        component={RecoverPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
