import React from "react";
import Order from ".";

import { ScrollView, Spacer } from "../../styles/index";

const OrderList = () => {
  return (
    <ScrollView fluid background="light" hasPadding>
      {Array.from(Array(3))?.map((item) => (
        <Order
          cover="https://img.ltwebstatic.com/images3_pi/2020/12/17/16081985093daa2cfca788146670fd121e796ada63.webp"
          brand="Rafa Simons"
          title="Cardiga listrado grande"
          price="$1080"
        />
      ))}
      <Spacer size="50px" />
    </ScrollView>
  );
};

export default OrderList;
