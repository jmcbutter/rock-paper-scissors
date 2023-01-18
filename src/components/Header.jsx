import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { LogoIcon } from "../assets/icons";

function Header({ score }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      border="1px solid white"
      borderRadius="15px"
      padding="1.75rem 2rem"
      width="min(100%, 44rem)"
    >
      <LogoIcon boxSize="6.75rem" />
      <Box
        width="9.5rem"
        borderRadius="8px"
        background="linear-gradient(hsl(0 0% 100%), hsl(0 0% 95%))"
        textAlign="center"
        display="flex"
        flexDir="column"
        lineHeight="1"
        justifyContent="space-around"
        padding="1rem"
      >
        <Text
          color="#2A45C2"
          fontSize="1rem"
          textTransform="uppercase"
          fontWeight="700"
          margin="0"
        >
          Score
        </Text>
        <Text color="#565468" fontSize="4rem" fontWeight="700">
          {score}
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
