import { StatusBar } from "react-native";
import { colors } from "../../styles/them.json";
import React, { useState } from "react";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import { ScrollView, Title, Spacer } from "../../styles/index";

const Cart = () => {
  const [tab, setTab] = useState("");
  return (
    <>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Header title="Cart" goBack />
      <Tabs
        tabs={[
          { label: "Cart", value: "cart" },
          { label: "Payment", value: "payment" },
        ]}
        active={tab}
        onChange={(value) => setTab(value)}
      />
      <Title hasPadding variant="small">
        Order number is 129832
      </Title>
      <ScrollView background="light">
        {tab === "cart" && (
          <>
            <Title>Cart</Title>
          </>
        )}
        {tab === "payment" && (
          <>
            <Title>Payment</Title>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Cart;
