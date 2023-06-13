import React from "react";
import {
  Center,
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Image,
  HStack,
  Text,
  Heading,
  Box,
  VStack,
  Button,
  AspectRatio,
  Stack,
} from "native-base";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Hero from "../components/Hero";
const productData = [
  {
    name: "Product1",
    description:
      "Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.",
    price: "60",
    time: "5min",
  },
  {
    name: "Product2",
    description:
      "Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.",
    price: "50",
    time: "5min",
  },
  {
    name: "Product3",
    description:
      "Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.",
    price: "100",
    time: "5min",
  },
  {
    name: "Product4",
    description:
      "Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.",
    price: "10",
    time: "5min",
  },
  {
    name: "Product5",
    description:
      "Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.",
    price: "700",
    time: "5min",
  },
  {
    name: "Product10",
    description:
      "Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.",
    price: "10",
    time: "2min",
  },
];
export default function Home() {
  return (
    <>
      <HStack
        style={{
          overflowX: "auto",
        }}
        mt="10"
      >
        {productData.map((data, i) => (
          <Card product={data} key={i} />
        ))}
      </HStack>
      <HStack pb="20">
        {productData.map((data, i) => (
          <Card product={data} key={i} />
        ))}
      </HStack>
    </>
  );
}

export const Card = ({ product, key }) => {
  return (
    <Link
      href={{
        pathname: `product/${Math.random()}`,
        query: {
          name: product.name,
          description: product.description,
          price: product.price,
          time: product.time,
        },
      }}
    >
      <Box alignItems="center" margin="10">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {product.name}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {product.price}
              </Text>
            </Stack>
            <Text fontWeight="400">{product.description}</Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  {product.time}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};
