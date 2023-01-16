import React from "react";
import { Cover, Text, Touchable, Box } from "../../styles";
import { colors } from "../../styles/them.json";

const Story = () => {
  return (
    <Touchable
      onPress={() => alert("você esta olhando o story")}
      radius="10px"
      height="190px"
      spacing="0px 5px 0px"
      width="150px"
    >
      <Cover
        image="https://img.ltwebstatic.com/images3_pi/2020/12/17/16081985093daa2cfca788146670fd121e796ada63.webp"
        height="100%"
        width="100%"
      >
        <Box hasPadding background={`${colors.dark}80`} fluid>
          <Cover
            height="40px"
            width="40px"
            border={`1px solid ${colors.light}`}
            circle
            image="https://img.ltwebstatic.com/images3_pi/2020/12/17/16081985093daa2cfca788146670fd121e796ada63.webp"
          />
          <Box justify="flex-end">
            <Text numberOfLines={1} color="light" bold>
              LeonardoFerreira
            </Text>
            <Text color="light" variant="small">
              2 mins ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
};

export default Story;
