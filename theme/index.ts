import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    neutral: {
      black: "#000",
      gray: "#47585B",
      info: "#999999",
      white: "#fff",
    },

    yellow: {
      "100": "#FFBA08",

      "50": "rgba(255,186,8,0.5)",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "neutral.white",
        color: "neutral.gray",
      },
    },
  },
});
