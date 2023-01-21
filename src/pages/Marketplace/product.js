import React from "react";
import { StretchyScrollView } from "react-native-stretchy";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { colors } from "../../styles/them.json";
import { useNavigation } from "@react-navigation/native";

import Picker from "../../components/Picker";
import Header from "../../components/Header";
import {
  Touchable,
  Box,
  Title,
  Text,
  Spacer,
  Button,
} from "../../styles/index";

const Product = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header
        goBack
        title="Cardigã Listrado"
        right={() => (
          <Touchable
            width="70px"
            justify="center"
            align="center"
            onPress={() => alert("teste")}
          >
            <Icon name="bag" size={25} />
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{
          uri: "https://img.ltwebstatic.com/images3_pi/2020/12/17/16081985093daa2cfca788146670fd121e796ada63.webp",
        }}
        imageOverlay={<Box background={`${colors.dark}40`}></Box>}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light" variant="big">
              $1080
            </Title>
          </Box>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">CAMISA</Text>
          <Spacer size="20px" />
          <Title color="black" variant="small" bold>
            A.P.C. Coleção Primavera 2023
          </Title>
          <Spacer size="30px" />
          <Text>
            Cores vibrantes, estampas florais, texturas orgânicas e outras peças
            que ficam em alta nessa estação. Foi dada a largada para a temporada
            de primavera-verão 2023! E, com isso, já estamos de olho nas
            tendências que prometem fazer sucesso ou continuar bombando no mundo
            da moda durante esse período.
          </Text>
          <Spacer size="30px" />
          <Picker
            title="Tamanho"
            options={[
              { label: "P", value: "P" },
              { label: "M", value: "M" },
              { label: "G", value: "G" },
              { label: "XG", value: "XG" },
            ]}
            initialValue="M"
            onChange={(value) => alert(value)}
          />
          <Spacer size="30px" />
          <Button block onPress={() => navigation.navigate("Cart")}>
            <Text color="light">Adicionar ao carrinho</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  );
};

export default Product;
