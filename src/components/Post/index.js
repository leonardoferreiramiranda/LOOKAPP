import React from "react";
import { Box, Text, Cover, Touchable, Spacer } from "../../styles/index";
import { colors } from "../../styles/them.json";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const Post = () => {
  return (
    <Box fluid hasPadding>
      <Box row align="center">
        <Cover
          image="https://img.ltwebstatic.com/images3_pi/2020/12/17/16081985093daa2cfca788146670fd121e796ada63.webp"
          width="40px"
          height="40px"
          circle
        />
        <Box spacing="0px 0px 0px 10px">
          <Text numberOfLines={1} bold color="dark">
            Leonardo Ferreira
          </Text>
          <Text variant="small">20 Minutes ago</Text>
        </Box>
        <Touchable height="30px" width="50px" align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>
      <Box fluid row>
        <Cover
          width="100%"
          height="200px"
          image="https://img.ltwebstatic.com/images3_pi/2020/12/17/16081985093daa2cfca788146670fd121e796ada63.webp"
          spacing="10px 0"
          radius="10px"
        />
      </Box>
      <Box row fluid align="center">
        <Box row fluid align="center">
          {Array.from(Array(3))?.map((item) => (
            <Cover
              height="30px"
              width="30px"
              border={`1px solid ${colors.light}`}
              circle
              image="https://img.ltwebstatic.com/images3_pi/2020/12/17/16081985093daa2cfca788146670fd121e796ada63.webp"
              spacing="0px -15px 0px 0px"
            />
          ))}
          <Text variant="small" spacing="0px 20px">
            Curtido por 10,908
          </Text>
        </Box>
        <Box row justify="flex-end">
          <Touchable spacing="0px 15px 0px 0px" width="24px">
            <Icon name="heart" size={24} color={colors.primary} />
          </Touchable>
          <Touchable spacing="0px 15px 0px 0px" width="24px">
            <Icon name="bubble" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px">
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Spacer />
      <Text color="dark" variant="small">
        Entrevista: Designer de calçados John Fluevog fala sobre novo livro,
        espiritualidade e 'Moda Lenta'.
      </Text>
    </Box>
  );
};

export default Post;
