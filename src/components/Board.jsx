import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import GameButton from "./GameButton";

function Board({ select }) {
  const [selection, setSelection] = useState();

  useEffect(() => {
    select(selection);
  }, [selection]);

  function onButtonClick(variant) {
    setSelection(variant);
  }

  return (
    <Box
      h="22rem"
      w="22rem"
      position="relative"
      background="center/100% no-repeat url(./bg-pentagon.svg)"
    >
      <GameButton
        id="1"
        variant={"scissors"}
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -50%)"
        onButtonClick={onButtonClick}
      />
      <GameButton
        id="2"
        variant={"spock"}
        position="absolute"
        top="35%"
        left="2%"
        transform="translate(-50%, -50%)"
        onButtonClick={onButtonClick}
      />
      <GameButton
        id="3"
        variant={"lizard"}
        position="absolute"
        top="90%"
        left="21%"
        transform="translate(-50%, -50%)"
        onButtonClick={onButtonClick}
      />
      <GameButton
        id="4"
        variant={"rock"}
        position="absolute"
        top="90%"
        left="79%"
        transform="translate(-50%, -50%)"
        onButtonClick={onButtonClick}
      />
      <GameButton
        id="5"
        variant={"paper"}
        position="absolute"
        top="35%"
        left="98%"
        transform="translate(-50%, -50%)"
        onButtonClick={onButtonClick}
      />
    </Box>
  );
}

export default Board;
