import React from "react";
import "react-native-gesture-handler";

import Routes from "./src/routes/Routes";

import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
