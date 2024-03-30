"use client";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Flex
      h={"40vh"}
      ml={"63px"}
      mr={"63px"}
      bgImage="url('/welcome.jpeg')"
      bgSize={"cover"}
      bgPos={"center"}
      borderRadius={"lg"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    >
      <Box>
        <Heading>Play your deucational world journey with</Heading>
      </Box>
      <Box>
        <Text fontSize={"x-large"}>
          Discover educational destinations worldwide!
        </Text>
      </Box>
    </Flex>
  );
}
