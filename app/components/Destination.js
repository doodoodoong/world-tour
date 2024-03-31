"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import CardPage from "./Card";

export default function Destination() {
  return (
    <>
      <Box marginX={"63px"} marginTop={"96px"} marginBottom={"16px"}>
        <Text>가까운 나라</Text>
      </Box>
      <Flex>
        <CardPage
          country="France"
          imgSrc="http://unsplash.it/2000?random&gravity=center"
          detail="Lorem occaecat aliquip et esse consequat cillum irure mollit."
        />
      </Flex>
    </>
  );
}
