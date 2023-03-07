import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
  },

  breakpoints: {
    sm: "280px",
    md: "768px",
    lg: "960px",
    xl: "1440px",
  },

  colors: {
    gray: "#999999",
    black: "#000000",
    white: "#FFFFFF",
    textBlack: "#303030",
    bg: "#D8D8D8",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
