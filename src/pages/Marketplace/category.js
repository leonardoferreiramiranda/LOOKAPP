import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { Touchable } from "../../styles/index";

import Header from "../../components/Header";
import ProductList from "../../components/Product/list";

import { useNavigation } from "@react-navigation/native";

const Category = () => {
  const navigation = useNavigation();
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
            onPress={() => navigation.navigate('Orders')}
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
