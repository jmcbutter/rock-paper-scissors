import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import GameButton from "./GameButton";

function Outcome({ userSelection, addToScore, setUserSelection }) {
  const [computerSelection, setComputerSelection] = useState("");
  const [winner, setWinner] = useState();

  const buttonSize = useBreakpointValue({
    base: "md",
    md: "lg",
  });

  useEffect(() => {
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerSelectionIndex = Math.floor(Math.random() * 5);
    let guesses = [
      options[computerSelectionIndex],
      ...options.slice(computerSelectionIndex),
    ];

    for (let i = 0; i < 15; i++) {
      guesses = [...guesses, ...options];
    }

    for (let i = guesses.length - 1; i >= 0; i--) {
      let time = 7000 / Math.pow(i + 1, 1 / 8) - 4000;
      setTimeout(() => {
        setComputerSelection(guesses[i]);

        if (i == 0) {
          if (userSelection == "rock" && guesses[i] == "rock") {
            setWinner("tie");
          }
          if (userSelection == "rock" && guesses[i] == "paper") {
            setWinner("computer");
          }
          if (userSelection == "rock" && guesses[i] == "scissors") {
            setWinner("user");
          }
          if (userSelection == "rock" && guesses[i] == "lizard") {
            setWinner("user");
          }
          if (userSelection == "rock" && guesses[i] == "spock") {
            setWinner("computer");
          }

          if (userSelection == "paper" && guesses[i] == "rock") {
            setWinner("user");
          }
          if (userSelection == "paper" && guesses[i] == "paper") {
            setWinner("tie");
          }
          if (userSelection == "paper" && guesses[i] == "scissors") {
            setWinner("computer");
          }
          if (userSelection == "paper" && guesses[i] == "lizard") {
            setWinner("computer");
          }
          if (userSelection == "paper" && guesses[i] == "spock") {
            setWinner("user");
          }

          if (userSelection == "scissors" && guesses[i] == "rock") {
            setWinner("computer");
          }
          if (userSelection == "scissors" && guesses[i] == "paper") {
            setWinner("user");
          }
          if (userSelection == "scissors" && guesses[i] == "scissors") {
            setWinner("tie");
          }
          if (userSelection == "scissors" && guesses[i] == "lizard") {
            setWinner("user");
          }
          if (userSelection == "scissors" && guesses[i] == "spock") {
            setWinner("computer");
          }

          if (userSelection == "lizard" && guesses[i] == "rock") {
            setWinner("computer");
          }
          if (userSelection == "lizard" && guesses[i] == "paper") {
            setWinner("user");
          }
          if (userSelection == "lizard" && guesses[i] == "scissors") {
            setWinner("computer");
          }
          if (userSelection == "lizard" && guesses[i] == "lizard") {
            setWinner("tie");
          }
          if (userSelection == "lizard" && guesses[i] == "spock") {
            setWinner("user");
          }

          if (userSelection == "spock" && guesses[i] == "rock") {
            setWinner("user");
          }
          if (userSelection == "spock" && guesses[i] == "paper") {
            setWinner("computer");
          }
          if (userSelection == "spock" && guesses[i] == "scissors") {
            setWinner("user");
          }
          if (userSelection == "spock" && guesses[i] == "lizard") {
            setWinner("computer");
          }
          if (userSelection == "spock" && guesses[i] == "spock") {
            setWinner("tie");
          }
        }
      }, time);
    }
  }, [""]);

  useEffect(() => {
    if (winner == "user") addToScore();
  }, [winner]);

  function onPlayAgainButtonClick() {
    console.log("CLICK");
    setWinner("");
    setComputerSelection("");
    setUserSelection("");
  }

  return (
    <Grid
      templateColumns={{ base: "1fr 1fr", md: "1fr auto 1fr" }}
      templateRows={{ base: "6fr 1fr 4fr", md: "auto auto" }}
      templateAreas={{
        base: `"userSelection cpuSelection"
               "userLabel  cpuLabel"
               "outcomeMessage outcomeMessage"`,
        md: `"userLabel          .         cpuLabel"
             "userSelection outcomeMessage cpuSelection"`,
      }}
      rowGap={{ base: "2rem", md: "4rem" }}
      columnGap={{ base: "3rem", md: "5rem" }}
      textAlign="center"
    >
      <GridItem area={"userLabel"}>
        <Text fontSize="1.5rem" fontWeight="700" textTransform="uppercase">
          You Picked
        </Text>
      </GridItem>
      <GridItem area={"userSelection"}>
        <GameButton
          position="relative"
          zIndex={winner == "user" ? 0 : 1}
          size={buttonSize}
          variant={userSelection}
          isSelected="true"
          isWinner={winner == "user"}
        />
      </GridItem>

      {winner ? (
        <GridItem
          area={"outcomeMessage"}
          display="flex"
          flexDir="column"
          justifyContent="center"
        >
          <Text fontSize="3.5rem" fontWeight="700" textTransform="uppercase">
            {winner == "tie"
              ? "Tie Game"
              : winner == "user"
              ? "You Win"
              : "You Lose"}
          </Text>
          <Button
            bgColor="white"
            padding="1rem 4rem"
            color="#3B4262"
            textTransform="uppercase"
            _hover={{
              bgColor: "white",
              color: "#DB2E4D",
            }}
            onClick={onPlayAgainButtonClick}
            margin="0 auto"
          >
            Play Again
          </Button>
        </GridItem>
      ) : (
        ""
      )}

      <GridItem area={"cpuLabel"}>
        <Text fontSize="1.5rem" fontWeight="700" textTransform="uppercase">
          The House Picked
        </Text>
      </GridItem>
      <GridItem area={"cpuSelection"}>
        <GameButton
          position="relative"
          zIndex={winner == "computer" ? 0 : 1}
          size={buttonSize}
          variant={computerSelection}
          isWinner={winner == "computer"}
          isSelected="true"
        />
      </GridItem>
    </Grid>
  );
}

export default Outcome;
