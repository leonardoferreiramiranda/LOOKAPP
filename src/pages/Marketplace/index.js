import React from "react";
import Header from "../../components/Header";
import { Box, Text, Touchable } from "../../styles/index";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import CategoryList from "../../components/Category/list";

const Marketplace = () => {
  return (
    <>
      <Header
        title="Categorias"
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
        <CategoryList />
    </>
  );
};

export default Marketplace;
