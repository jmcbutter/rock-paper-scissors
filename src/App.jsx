import { useState } from "react";
import "./App.css";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";

import Board from "./components/Board";
import Outcome from "./components/Outcome";
import Header from "./components/Header";

import { CloseIcon, RulesIcon } from "./assets/icons";

function App() {
  const [score, setScore] = useState(0);
  const [userSelection, setUserSelection] = useState();
  const [modalOpen, setModalOpen] = useState(true);

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

      {modalOpen ? (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgColor="#00000080"
          zIndex="100"
        >
          <Box
            bgColor="white"
            padding="2rem 2rem 3rem 2rem"
            position="absolute"
            zIndex="100"
            top={{ base: "0", sm: "50%" }}
            left={{ base: "0", sm: "50%" }}
            right={{ base: "0", sm: "auto" }}
            bottom={{ base: "0", sm: "auto" }}
            transform={{ sm: "translate(-50%, -50%)" }}
            borderRadius="0.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              templateAreas={{
                base: `"heading"
                       "image"
                       "close"`,
                sm: `"heading close"
                     "image   image"`,
              }}
              rowGap={{ base: "7rem", sm: "1.5rem" }}
            >
              <GridItem area="heading">
                <Text
                  fontSize="2rem"
                  color="#3B4262"
                  textTransform={"uppercase"}
                  fontWeight="700"
                  textAlign={{ base: "center", sm: "left" }}
                >
                  Rules
                </Text>
              </GridItem>

              <GridItem
                area="close"
                display="flex"
                alignItems={"center"}
                justifyContent={{ base: "center", sm: "flex-end" }}
              >
                <CloseIcon
                  cursor="pointer"
                  onClick={() => setModalOpen(false)}
                  boxSize="1.5rem"
                />
              </GridItem>

              <GridItem area="image" display="flex" justifyContent={"center"}>
                <RulesIcon boxSize={{ base: "95%", sm: "25vw" }} />
              </GridItem>
            </Grid>
          </Box>
        </Box>
      ) : (
        ""
      )}

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
          onClick={() => setModalOpen(true)}
        >
          Rules
        </Button>
      </Box>
    </Box>
  );
}

export default App;
