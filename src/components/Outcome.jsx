import { useState } from "react";
import { Button, Grid, GridItem, Text } from "@chakra-ui/react";

import GameButton from "./GameButton";

function Outcome() {
  return (
    <Grid templateColumns="1fr auto 1fr" gap="4rem" textAlign="center">
      <GridItem colStart={1} rowStart={1}>
        <Text fontSize="1.5rem" fontWeight="700" textTransform="uppercase">
          You Picked
        </Text>
      </GridItem>
      <GridItem colStart={1} rowStart={2}>
        <GameButton
          size="lg"
          variant="rock"
          isSelected="true"
          isWinner="true"
        />
      </GridItem>

      <GridItem
        colStart={2}
        rowStart={2}
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Text fontSize="3.5rem" fontWeight="700" textTransform="uppercase">
          YOU WIN
        </Text>
        <Button
          bgColor="white"
          padding="1rem"
          color="#3B4262"
          textTransform="uppercase"
          _hover={{
            bgColor: "white",
            color: "#DB2E4D",
          }}
        >
          Play Again
        </Button>
      </GridItem>

      <GridItem colStart={3} rowStart={1}>
        <Text fontSize="1.5rem" fontWeight="700" textTransform="uppercase">
          The House Picked
        </Text>
      </GridItem>
      <GridItem colStart={3} rowStart={2}>
        <GameButton size="lg" variant="paper" />
      </GridItem>
    </Grid>
  );
}

export default Outcome;
