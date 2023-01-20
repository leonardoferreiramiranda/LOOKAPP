import React from "react";
import { Text, Touchable, Box, ScrollView } from "../../styles/index";
import { colors } from "../../styles/them.json";

const Tabs = ({ tabs, active = "", onChange = (tab) => {} }) => {
  const activeTabStyle = {
    borderBottomWidth: 5,
    borderBottomColor: colors.danger,
  };
  return (
    <Box row background="blue" height="80px">
      {tabs?.map((tab) => (
        <Touchable
        onPress={() => onChange(tab.value)}
          align="center"
          hasPadding
          style={[active === tab.value ? activeTabStyle : {}]}
        >
          <Text color={active === tab.value ? "primary" : undefined}>
            {tab.label}
          </Text>
        </Touchable>
      ))}
    </Box>
  );
};

export default Tabs;
