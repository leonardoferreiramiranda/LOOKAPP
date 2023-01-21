import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Text, Box, Touchable, Spacer, Cover } from "../../styles/index";

const Product = ({ cover, brand, title, price, selected = false }) => {
  const navigation = useNavigation();
  return (
    <Touchable
      onPress={() => navigation.navigate("Product")}
      hasPadding={!selected}
      background="light"
      row
      spacing={selected ? "5px 0" : "0px 0px 1px 0px"}
    >
      <Cover width="80px" height="80px" image={cover} />
      <Box hasPadding style={{ paddingTop: 0, paddingBottom: 0 }}>
        {!selected && <Text color="dark">{brand}</Text>}
        <Text color="dark" bold>
          {title}
        </Text>
        <Spacer />
        {selected && (
          <Box>
            <Text color="dark" variant="small">
              Tamanho: M
            </Text>
          </Box>
        )}

        <Box row width="100%" justify="space-between">
          <Text color="dark">{price}</Text>
          <Text variant="small" color="danger">
            {selected ? "Remover" : "Adicionar ao Carrinho"}
          </Text>
        </Box>
      </Box>
    </Touchable>
  );
};

export default Product;
