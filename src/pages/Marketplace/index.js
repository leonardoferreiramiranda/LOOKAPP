import React from "react";
import Header from "../../components/Header";
import { Touchable } from "../../styles/index";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import CategoryList from "../../components/Category/list";
import { useNavigation } from "@react-navigation/native";

const Marketplace = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header
        title="Categorias"
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
      <CategoryList />
    </>
  );
};

export default Marketplace;
