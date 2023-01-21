import React from "react";
import { Box, Title, Touchable } from "../../styles/index";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../styles/them.json";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title = "Explore", right = null, goBack = false }) => {
  const navigation = useNavigation();
  return (
    <Box
      fluid
      height="80px"
      row
      align="center"
      border={`1px solid ${colors.muted}50`}
    >
      <Touchable
        width="70px"
        justify="center"
        align="center"
        onPress={() => navigation[!goBack ? "openDrawer" : "goBack"]()}
      >
        <Icon name={!goBack ? "menu" : "arrow-left"} size={25} />
      </Touchable>
      <Box align="center" justify="center">
        <Title>{title}</Title>
      </Box>
      {right ? right() : <Box width="70px"></Box>}
    </Box>
  );
};

export default Header;
