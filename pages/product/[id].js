import {
  AspectRatio,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  Toast,
} from "native-base";
import React, { useContext } from "react";
import { UserContext } from "../../Context";

export default function productDetail({ data }) {
  const { cart, setCart } = useContext(UserContext);
  return (
    <HStack>
      <Box>
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
          ml="100"
          mt="100"
        >
          <AspectRatio w="100%" ratio={16 / 10}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" ml="100" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {data.name}
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
              {data.price}
            </Text>
          </Stack>
          <Box w="30%">
            <Text fontWeight="400">{data.description}</Text>
          </Box>

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                {data.time}
              </Text>
            </HStack>
          </HStack>
          <HStack space={5}>
            <Button
              onPress={() => {
                setCart([
                  ...cart,
                  {
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    time: data.time,
                  },
                ]);
                Toast.show({
                  description: "PRODUCT ADD TO CART SUCCESSFULLY",
                  placement: "top",
                });
              }}
            >
              Add To Cart
            </Button>
            <Button>Buy Now</Button>
          </HStack>
        </Stack>
      </Box>
    </HStack>
  );
}

export const getServerSideProps = (context) => {
  console.log(context.query);
  return {
    props: {
      data: context.query, //pass it to the page props
    },
  };
};
