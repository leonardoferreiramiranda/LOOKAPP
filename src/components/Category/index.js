import React from "react";
import { colors } from "../../styles/them.json";
import { useNavigation } from "@react-navigation/native";

import { Box, Text, Touchable, Cover, Title, Spacer } from "../../styles/index";

const Category = ({ title, description }) => {
  const navigation = useNavigation();
  return (
    <Touchable
      width="100%"
      height="200px"
      radius="10px"
      spacing="10px 0px"
      onPress={() => navigation.navigate("Category")}
    >
      <Cover
        width="100%"
        height="100%"
        image="https://img.ltwebstatic.com/images3_pi/2020/12/17/16081985093daa2cfca788146670fd121e796ada63.webp"
      >
        <Box
          width="100%"
          align="center"
          justify="center"
          hasPadding
          background={`${colors.black}50`}
        >
          <Title bold color="light">
            {title}
          </Title>
          <Spacer />
          <Text color="light">{description}</Text>
        </Box>
      </Cover>
    </Touchable>
  );
};

export default Category;
