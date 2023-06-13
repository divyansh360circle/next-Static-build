import { Box, Button, Center, HStack, Icon, Text } from "native-base";
import React from "react";

export default function Footer() {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box
      flex={1}
      // bg="blue"
      // safeAreaTop
      width="100%"
      // maxW="300px"
      // alignSelf="center"
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "rgba(0,0,0,.2)"
      }}
      p="8"
    >
      <Center>
        <Text color="black" fontSize="12">
          @Copyright Copyright 2022/23 Qafto.com
        </Text>
      </Center>
    </Box>
  );
}
