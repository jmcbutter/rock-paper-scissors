import { useState } from "react";
import "./App.css";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";

import Board from "./components/Board";
import Outcome from "./components/Outcome";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [userSelection, setUserSelection] = useState();

  function addToScore() {
    setScore(score + 1);
  }

  function select(selection) {
    setUserSelection(selection);
  }

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
      <Header score={score} />

      {userSelection ? (
        <Outcome
          userSelection={userSelection}
          addToScore={addToScore}
          setUserSelection={setUserSelection}
        />
      ) : (
        <Board select={select} />
      )}

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

export default App;
