import { Box, Button, HStack, Heading, Tooltip } from "native-base";
import React, { useContext } from "react";
import { Text } from "react-native";
import Link from "next/link";
import { UserContext } from "../Context";
export default function Navbar() {
  const {cart} = useContext(UserContext)
  return (
    <HStack
      alignItems="center"
      space="10"
      justifyContent="space-around"
      mt="10"
    >
      <Link href="/">
        <Heading style={{ cursor: "pointer" }}>Logo</Heading>
      </Link>
      <HStack space="10">
        <Link href="/Home">
          <Text fontSize="xl" style={{ cursor: "pointer" }}>
            Home
          </Text>
        </Link>
        <Text fontSize="xl">About</Text>
        <Text fontSize="xl">ContactUs</Text>
        <Text fontSize="xl">Services</Text>
      </HStack>
      <HStack space="6" alignItems="center">
        <Link href="/Login">
          <Text fontSize="xl" style={{ cursor: "pointer" }}>
            Login
          </Text>
        </Link>
        <Link href="/Register">
          <Text fontSize="xl" style={{ cursor: "pointer" }}>
            Register
          </Text>
        </Link>
        <Link href="/Cart">
          <Text fontSize="xl" style={{ cursor: "pointer" }}>
            Cart
          </Text>
        </Link>
        <Box alignItems="center" justifyContent="center" w="8" h="8" rounded="full" style={{background:"red",}}>{cart.length}</Box>
      </HStack>
    </HStack>
  );
}
