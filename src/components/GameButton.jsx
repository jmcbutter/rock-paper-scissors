import { Box } from "@chakra-ui/react";
import {
  RockIcon,
  PaperIcon,
  ScissorsIcon,
  LizardIcon,
  SpockIcon,
} from "../assets/icons.jsx";

function GameButton({ id, variant, size, isSelected, isWinner, ...restProps }) {
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
  })();

  return (
    <Box
      {...restProps}
      bgGradient={gradient}
      boxShadow={
        isWinner
          ? `0 calc(0.05*${buttonSize}) ${shadowColor}, 0 calc(0.05*${buttonSize}/2) 0 calc(0.75 * ${buttonSize}) #FFFFFF0C, 0 calc(0.05*${buttonSize}/2) 0 calc(0.50 * ${buttonSize}) #FFFFFF0C, 0 calc(0.05*${buttonSize}/2) 0 calc(0.25 * ${buttonSize}) #FFFFFF0C`
          : `0 calc(0.05*${buttonSize}) ${shadowColor}`
      }
      height={buttonSize}
      width={buttonSize}
      borderRadius="50%"
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      _hover={
        isSelected
          ? ""
          : {
              boxShadow: `0 calc(0.05*${buttonSize}) ${shadowColor}, 0 calc(0.05*${buttonSize}/2) 0 calc(0.125 * ${buttonSize}) #FFFFFF0C`,
            }
      }
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

export default GameButton;
