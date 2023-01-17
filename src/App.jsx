import { useState } from "react";
import "./App.css";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import {
  RockIcon,
  PaperIcon,
  ScissorsIcon,
  LizardIcon,
  SpockIcon,
  LogoIcon,
} from "./assets/icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      className="App"
      h="100%"
      w="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      padding="2rem"
    >
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
            12
          </Text>
        </Box>
      </Box>

      <Board />
      {/* <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="1fr 9fr"
        gap="4.5rem"
      >
        <GridItem>
          <Text fontSize="1.5rem" fontWeight="700" textTransform="uppercase">
            You Picked
          </Text>
        </GridItem>
        <GridItem>
          <GameButton size="lg" variant="rock" />
        </GridItem>
        <GridItem>
          <Text fontSize="1.5rem" fontWeight="700" textTransform="uppercase">
            The House Picked
          </Text>
        </GridItem>
        <GridItem>
          <GameButton size="lg" variant="rock" />
        </GridItem>
      </Grid> */}

      <Box
        display="flex"
        justifyContent={{ base: "center", lg: "flex-end" }}
        width="100%"
        background="inherit"
      >
        <Button
          background="inherit"
          color="white"
          fontWeight="700"
          textTransform="uppercase"
          border="1px solid white"
          padding="0.625rem 2.25rem"
        >
          Rules
        </Button>
      </Box>
    </Box>
  );
}

function Board() {
  const [selected, setSelected] = useState(true);

  return (
    <Box
      h="22rem"
      w="22rem"
      position="relative"
      background="center/100% no-repeat url(./bg-pentagon.svg)"
    >
      <GameButton
        id="1"
        variant={"rock"}
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -50%)"
        selected={selected}
      />
      <GameButton
        id="2"
        variant={"paper"}
        position="absolute"
        top="35%"
        left="2%"
        transform="translate(-50%, -50%)"
      />
      <GameButton
        id="3"
        variant={"scissors"}
        position="absolute"
        top="90%"
        left="21%"
        transform="translate(-50%, -50%)"
      />
      <GameButton
        id="4"
        variant={"lizard"}
        position="absolute"
        top="90%"
        left="79%"
        transform="translate(-50%, -50%)"
      />
      <GameButton
        id="5"
        variant={"spock"}
        position="absolute"
        top="35%"
        left="98%"
        transform="translate(-50%, -50%)"
      />
    </Box>
  );
}

function GameButton({ id, variant, size, selected, ...restProps }) {
  let icon;
  let gradient;
  let shadowColor;
  let buttonSize = "9.5rem";

  (() => {
    switch (size) {
      case "lg":
        buttonSize = "19rem";
        break;
      default:
        buttonSize = "9.5rem";
        break;
    }
  })();
  (() => {
    switch (variant) {
      case "rock":
        icon = <RockIcon boxSize={`calc(0.3*${buttonSize})`} />;
        gradient = "linear(-45deg, hsl(349 71% 52%), hsl(349 70% 56%))";
        shadowColor = "hsl(347 75% 35%)";
        break;
      case "paper":
        icon = <PaperIcon boxSize={`calc(0.3*${buttonSize})`} />;
        gradient = "linear(-45deg, hsl(230 89% 62%), hsl(230 89% 65%))";
        shadowColor = "hsl(230 64% 46%)";
        break;
      case "scissors":
        icon = <ScissorsIcon boxSize={`calc(0.3*${buttonSize})`} />;
        gradient = "linear(-45deg, hsl(39 89% 49%), hsl(40 84% 53%))";
        shadowColor = "hsl(28 77% 44%)";
        break;
      case "lizard":
        icon = <LizardIcon boxSize={`calc(0.3*${buttonSize})`} />;
        gradient = "linear(-45deg, hsl(261 73% 60%), hsl(261 72% 63%))";
        shadowColor = "hsl(261 51% 44%)";
        break;
      case "spock":
        icon = <SpockIcon boxSize={`calc(0.3*${buttonSize})`} />;
        gradient = "linear(-45deg, hsl(189 59% 53%), hsl(189 58% 57%))";
        shadowColor = "hsl(194 58% 42%)";
        break;
    }

    return icon;
  })();

  return (
    <Box
      {...restProps}
      bgGradient={gradient}
      boxShadow={`0 calc(0.05*${buttonSize}) ${shadowColor}`}
      height={buttonSize}
      width={buttonSize}
      borderRadius="50%"
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      _hover={{
        boxShadow: `0 calc(0.05*${buttonSize}) ${shadowColor}, 0 calc(0.05*${buttonSize}/2) 0 calc(0.125 * ${buttonSize}) #FFFFFF0C`,
      }}
    >
      {/*Gradient Background */}
      <Box
        bgGradient={"linear(hsl(0 0% 93%), hsl(0 0% 95%))"}
        height={`calc(0.75*${buttonSize})`}
        width={`calc(0.75*${buttonSize})`}
        borderRadius="50%"
        boxShadow={`inset 0 calc(0.05*${buttonSize}) hsl(230 23% 78%)`}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        {/*White Background */}
        {icon}
        {/*Rock, Paper, Scissors, Lizard, or Spock SVG*/}
      </Box>
    </Box>
  );
}

export default App;
