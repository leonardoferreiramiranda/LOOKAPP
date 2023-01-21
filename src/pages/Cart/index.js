import { StatusBar } from "react-native";
import { colors } from "../../styles/them.json";
import React, { useState } from "react";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import { Box, ScrollView, Spacer, Title, Text, Button } from "../../styles";
import Product from "../../components/Product";
import PaymentForm from "../../components/Forms/payments";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();
  const [tab, setTab] = useState("cart");
  return (
    <>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Header title="Carrinho" goBack />
      <Tabs
        tabs={[
          { label: "Carrinho", value: "cart" },
          { label: "Pagamento", value: "payment" },
        ]}
        active={tab}
        onChange={(value) => setTab(value)}
      />
      <ScrollView hasPadding background="light">
        <Spacer />
        <Title underline variant="small">
          Pedido de número 129832
        </Title>
        <Spacer size="50px" />
        {tab === "cart" && (
          <>
            {Array.from(Array(3))?.map((item) => (
              <Product
                cover="https://img.ltwebstatic.com/images3_pi/2020/12/17/16081985093daa2cfca788146670fd121e796ada63.webp"
                brand="Rafa Simons"
                title="Cardiga listrado grande"
                price="$1080"
                selected
              />
            ))}
            <Spacer />
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Pedido:</Text>
              <Text color="dark">$3240.00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Desconto:</Text>
              <Text color="success">$-79.50</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="dark">Entrega:</Text>
              <Text color="dark">$10.00</Text>
            </Box>
            <Box row width="100%" height="30px" justify="space-between">
              <Text color="black" bold>
                Total Order:
              </Text>
              <Text color="dark" bold>
                $1010.50
              </Text>
            </Box>
            <Spacer size="30px" />
            <Button block onPress={() => setTab("payment")}>
              <Text color="light">Finalizar Pedido</Text>
            </Button>
          </>
        )}
        {tab === "payment" && (
          <>
            <Box
              row
              justify="space-between"
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: colors.muted,
                paddingBottom: 10,
              }}
            >
              <Text bold color="dark">
                Endereço de compra
              </Text>
              <Text color="danger">Trocar</Text>
            </Box>
            <Spacer />
            <Text>
              Endereço qualquer apenas para demostração 87292 - Brasil
            </Text>
            <Spacer size="30px" />
            <Box
              row
              justify="space-between"
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: colors.muted,
                paddingBottom: 10,
              }}
            >
              <Text bold color="dark">
                Detalhes da entrega
              </Text>
              <Text color="danger">Trocar</Text>
            </Box>
            <Spacer />
            <Text>Entrega Padrão</Text>
            <Text>Sábado 27 - Terça 30</Text>
            <Text>Custo: $10</Text>
            <Spacer size="30px" />
            <PaymentForm
              onChange={(creditCardData) => console.log(creditCardData)}
            />

            <Spacer size="30px" />
            <Button block onPress={() => navigation.navigate("CongratsModal")}>
              <Text color="light">Confirmar</Text>
            </Button>
            <Spacer size="50px" />
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Cart;
