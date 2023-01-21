import React, { useState, useRef, useEffect } from "react";
import { Box, Text, Spacer, Touchable, Input } from "../../styles/index";
import SegmentedPicker from "react-native-segmented-picker";

const PaymentForm = ({ onChange = (creditCard) => {} }) => {
  const pickerRef = useRef(null);
  const [data, setData] = useState({
    name: "",
    number: "",
    valid_date: "",
    cvv: "",
  });

  useEffect(() => {
    onChange(data);
  }, [data]);

  return (
    <>
      <SegmentedPicker
        ref={pickerRef}
        onConfirm={(data) =>
          setData({
            ...data,
            valid_date: `${data.month}/${data.year}`,
          })
        }
        options={[
          {
            key: "month",
            items: [
              { label: "Option 1", value: "option_1" },
              { label: "Option 2", value: "option_2" },
            ],
          },
          {
            key: "year",
            items: [{ label: "Option 3", value: "option_3" }],
          },
        ]}
      />
      <Box>
        <Text bold color="black">
          Selecione e insira seus detalhes de pagamento
        </Text>
        <Box row>
          <Text variant="small">ao continuar você concorda com nossos </Text>
          <Touchable>
            <Text variant="small" color="danger">
              Terms
            </Text>
          </Touchable>
        </Box>
        <Spacer size="30px" />
        <Input
          placeholder="Nome"
          value={data.name}
          onChangeText={(name) =>
            setData({
              ...data,
              name,
            })
          }
        />
        <Spacer />
        <Input
          placeholder="Número do cartão"
          value={data.number}
          onChangeText={(number) =>
            setData({
              ...data,
              number,
            })
          }
        />
        <Spacer />
        <Touchable width="100%" onPress={() => pickerRef.current.show()}>
          <Input editable={false} placeholder="MM/AA" />
        </Touchable>
        <Spacer />
        <Box row>
          <Box>
            <Input
              placeholder="CCV"
              value={data.cvv}
              onChangeText={(cvv) =>
                setData({
                  ...data,
                  cvv,
                })
              }
            />
          </Box>
          <Box spacing="0px 0px 0px 10px">
            <Text variant="small">
              3 ou 4 dígitos geralmente encontrados na faixa de assinatura
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PaymentForm;
