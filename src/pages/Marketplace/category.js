import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { Touchable } from "../../styles/index";

import Header from "../../components/Header";
import ProductList from "../../components/Product/list";

const Category = () => {
  return (
    <>
      <Header
        goBack
        title="Categoria X"
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
      <ProductList />
    </>
  );
};

export default Category;
