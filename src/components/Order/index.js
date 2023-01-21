import React from "react";
import { colors } from "../../styles/them.json";
import { Box, Text, Title } from "../../styles/index";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const Order = () => {
  return (
    <Box
      border={`1px solid ${colors.muted}50`}
      radius="5px"
      spacing="0px 0px 10px 0px"
    >
      <Box
        hasPadding
        row
        justify="space-between"
        fluid
        style={{
          borderBottomWidth: 1,
          borderBottomColor: `${colors.muted}50`,
        }}
      >
        <Box row align="center">
          <Icon name="check" size={15} color={colors.success} />
          <Text color="success" spacing="0px 0px 0px 5px">
            Entregue
          </Text>
        </Box>
        <Text>20 Janeiro 2023</Text>
      </Box>
      <Box
        hasPadding
        fluid
        style={{
          borderBottomWidth: 1,
          borderBottomColor: `${colors.muted}50`,
        }}
      >
        <Title>Pedido Nº 123432</Title>
        <Text>
          Número de rastreamento: <Text color="dark">9081273</Text>
        </Text>
      </Box>
      <Box hasPadding row justify="space-between" fluid>
        <Text>
          valor dos itens: <Text color="dark">$60,50</Text>
        </Text>
        <Text>
          quantidade: <Text color="dark">3</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default Order;
