import React from "react";
import { Box, Text, Spacer, Button, Input, Title } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <Box justify="center" align="center" background="light" hasPadding>
      <Title bold variant="big">
        LOOKAPP
      </Title>
      <Spacer size="50px" />

      <Box hasPadding fluid height="250px">
        <Text>E-mail:</Text>
        <Spacer />
        <Input placeholder="Digite seu e-mail" />
        <Spacer />
        <Text>Senha:</Text>
        <Spacer />
        <Input placeholder="Digite sua senha" secureTextEntry />
      </Box>

      <Button onPress={() => navigation.navigate("Feed")}>
        <Text color="light">Entrar</Text>
      </Button>
      <Spacer size="50px" />
      <Text underline onPress={() => navigation.navigate("RecoverPassword")}>
        Esqueceu sua senha?
      </Text>
    </Box>
  );
};

export default SignIn;
