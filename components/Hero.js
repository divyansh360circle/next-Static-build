import { AspectRatio, Box, Image } from "native-base";
import React from "react";

export default function Hero() {
  return (
    <Box mt="10" w="100%" h="100%">
      {/* <AspectRatio w="100%" h="10%"> */}
        <Image
          source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
          }}
          alt="image"
          height="10%"
        />
      {/* </AspectRatio> */}
    </Box>
  );
}
