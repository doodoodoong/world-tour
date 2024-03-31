"use client";

import { Box } from "@chakra-ui/react";
import Welcome from "../components/Welcome";
import Destination from "../components/Destination";

export default function Main() {
  return (
    <Box>
      <Welcome />
      <Destination />
    </Box>
  );
}
