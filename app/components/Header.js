"use client";

import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      top={0}
      left={1}
      width={"100vw"}
      height={"10vh"}
      backgroundColor={"#ffffff"}
      boxShadow={"md"}
      alignItems={"center"}
    >
      <Box ml={"64px"} marginY={"33px"}>
        <Heading fontSize={24}>World Tour</Heading>
      </Box>
      <Box ml={"20px"}>
        <Button colorScheme={"gray"} variant={"ghost"}>
          관계가 깊은 나라
        </Button>
      </Box>
      <Box ml={"20px"}>
        <Button colorScheme={"gray"} variant={"ghost"}>
          가까운 나라
        </Button>
      </Box>
      <Spacer />
      <Box mr={"65px"}>
        <Button colorScheme={"red"}>여행 계획 세우기</Button>
      </Box>
    </Flex>
  );
}
