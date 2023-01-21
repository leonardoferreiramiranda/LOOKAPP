import React from "react";
import { Box, Text, Title, Button, Spacer } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { colors } from "../../styles/them.json";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Box background="dark" align="center" hasPadding>
        <Box justify="center" align="center" fluid>
          <Title variant="big" color="light">
            LOOKAPP
          </Title>
          <Spacer />
          <Text align="center" spacing="0px 40px" color="light">
            Fique por dentro do mundo da moda e compre seus looks favoritos
          </Text>
        </Box>

        <Box fluid align="center" justify="flex-end">
          <Button block onPress={() => navigation.navigate("SignIn")}>
            <Text color="light">Entrar na minha conta</Text>
          </Button>
          <Spacer />
          <Text
            onPress={() => navigation.navigate("SignUp")}
            color="light"
            underline
          >
            Criar nova conta
          </Text>
          <Spacer size="50px" />
        </Box>
      </Box>
    </>
  );
};

export default Home;
