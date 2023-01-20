import React from "react";
import Category from ".";

import { ScrollView, Spacer } from "../../styles/index";

const CategoryList = () => {
  return (
    <ScrollView
    style={{
      paddingTop: 10,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
    }}
    >
      {Array.from(Array(20))?.map((item) => (
        <Category title="Categoria" description="1234 ITENS"/>
      ))}
      <Spacer />
    </ScrollView>
  );
};

export default CategoryList;
