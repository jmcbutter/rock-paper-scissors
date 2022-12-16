import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box, Icon } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Box>
        {/*Gradient Background */}
        <Box>
          {/*White Background */}
          <Icon /> {/*Rock, Paper, Scissors, Lizard, or Spock SVG*/}
        </Box>
      </Box>
    </div>
  );
}

export default App;
