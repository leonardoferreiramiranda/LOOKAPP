import React from "react";
import { Box, Text, Spacer, Button, Input, Title } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";

const RecoverPassword = () => {
  const navigation = useNavigation();

  function redirecionar() {
    alert(
      "Pronto! E-mail enviado com sucesso. Você foi direcionada para tela de login"
    );
    navigation.navigate("SignIn");
  }

  return (
    <Box justify="center" align="center" background="light" hasPadding>
      <Title bold>Esqueceu sua senha?</Title>
      <Spacer size="50px" />

      <Box hasPadding fluid height="250px">
        <Text>
          Preencha abaixo seu endereço de e-mail para receber as instruções
          necessárias e criar uma nova senha
        </Text>
        <Spacer />
        <Text>E-mail</Text>
        <Spacer />
        <Input placeholder="Digite seu e-mail" secureTextEntry />
      </Box>
      <Spacer size="50px" />
      <Button onPress={() => redirecionar()}>
        <Text color="light">Recuperar minha senha</Text>
      </Button>
      <Spacer size="50px" />
      <Text underline onPress={() => navigation.navigate("SignIn")}>
        Fazer login
      </Text>
    </Box>
  );
};

export default RecoverPassword;
