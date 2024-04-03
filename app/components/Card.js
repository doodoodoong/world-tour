"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

CardPage.propTypes = {
  country: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default function CardPage({ country, imgSrc, detail }) {
  return (
    <Box ml={"63px"} borderRadius={"md"}>
      <Card width={"316px"} height={"352px"}>
        <CardBody backgroundImage={imgSrc} bgSize={"cover"}>
          <Flex flexDirection={"column"} justifyContent={"space-between"}>
            <Heading size={"md"}>{country}</Heading>
            <Text>{detail}</Text>
            <Button variant={"ghost"} backgroundColor={"white"}>
              Explore
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
}
