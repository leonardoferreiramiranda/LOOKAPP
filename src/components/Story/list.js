import React from "react";
import { Box, ScrollView, Text } from "../../styles";

import Story from ".";

const StoryList = () => {
  return (
    <Box fluid height="260px">
      <Box row fluid justify="space-between" hasPadding height="70px">
        <Text color="dark">Stories</Text>
        <Text color="primary" underline>
          Show All
        </Text>
      </Box>
      <ScrollView horizontal style={{ marginLeft: 20 }}>
        {Array.from(Array(20))?.map((item) => (
          <Story />
        ))}
      </ScrollView>
    </Box>
  );
};

export default StoryList;
