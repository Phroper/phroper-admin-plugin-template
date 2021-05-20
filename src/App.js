import { Text } from "@chakra-ui/react";
import React from "react";

export const App = ({ name = "World", ...props }) => {
  return <Text {...props}>Hello {name}!</Text>;
};
