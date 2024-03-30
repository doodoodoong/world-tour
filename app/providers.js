"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Fonts from "./fonts";

export default function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}
