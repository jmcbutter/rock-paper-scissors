import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: "no-repeat radial-gradient(circle at top,hsl(214 47% 23%), hsl(237 48% 15%))",
      padding: 0,
      fontFamily: "inherit",
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
