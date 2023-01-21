import React from "react";
import { StatusBar } from "react-native";
import Header from "../../components/Header";
import { colors } from "../../styles/them.json";
import OrderList from "../../components/Order/list";

const Orders = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Header title="Orders" />
      <OrderList />
    </>
  );
};

export default Orders;
