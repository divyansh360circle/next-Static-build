import React, { useContext } from "react";
import { UserContext } from "../Context";
import { Card } from "./Home";
import { Box, Center, Heading, Text } from "native-base";

export default function Cart() {
  const { cart } = useContext(UserContext);
  return (
    <Box pb="16">
      {cart.length > 0 ? cart.map((data, i) => (
        <Card product={data} key={i} />
      )) : <Center mt="20%"><Heading>CURRENTLY NOTHING IN YOUR CART</Heading></Center>
    }
    </Box>
  );
}
