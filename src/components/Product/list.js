import React from "react";
import Product from ".";

import { ScrollView } from "../../styles/index";

const ProductList = () => {
  return (
    <ScrollView>
      {Array.from(Array(20))?.map((item) => (
        <Product
          cover="https://img.ltwebstatic.com/images3_pi/2020/12/17/16081985093daa2cfca788146670fd121e796ada63.webp"
          brand="Rafa Simons"
          title="Cardiga listrado grande"
          price="$1080"
        />
      ))}
    </ScrollView>
  );
};

export default ProductList;
