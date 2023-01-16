import React from "react";
import { Box, Title, Text, Spacer, Button, Input } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  function redirecionar() {
    alert(
      "Conta criada com sucesso. Você foi direcionada para tela de login"
    );
    navigation.navigate("SignIn");
  }

  const navigation = useNavigation();

  return (
    <Box justify="center" align="center" color="light" hasPadding>
      <Title bold>Criar nova conta</Title>
      <Spacer />
      <Text>Insira seus dados abaixo:</Text>
      <Spacer size="50px" />

      <Input placeholder="Nome" />
      <Spacer />
      <Input placeholder="Email" />
      <Spacer />
      <Input placeholder="Senha" secureTextEntry />
      <Spacer size="50px" />

      <Button block onPress={() => redirecionar()}>
        <Text color="light">Criar nova conta</Text>
      </Button>
      <Spacer size="20px" />
      <Text underline onPress={() => navigation.navigate("Home")}>
        Cancelar
      </Text>
    </Box>
  );
};

export default SignUp;
