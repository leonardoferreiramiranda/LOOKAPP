import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Box, Text, Title, Button } from "../../styles/index";

const CongratsModal = () => {
  const navigation = useNavigation();
  return (
    <Box background="light" hasPadding justify="center" align="center">
      <Box align="center" fluid justify="flex-end">
        <Icon name="checkbox-marked-circle-outline" size={200} />
        <Title bold variant="big">
          Parabéns!
        </Title>
        <Text variant="small">
          Seus itens estão a caminho e devem chegar em breve
        </Text>
      </Box>
      <Box justify="center" align="center" fluid>
        <Button block onPress={() => navigation.navigate("Orders")}>
          <Text color="light">Acompanhar pedido</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default CongratsModal;
