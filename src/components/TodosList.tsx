import { VStack, Container } from "@chakra-ui/react";
import React from "react";

export const TodoList: React.FC<{}> = () => {
  return (
    <VStack w="100%">
      <Container w="100%">Large Container</Container>
      <Container w="100%">Large Container</Container>
      <Container w="100%">Large Container</Container>
      <Container w="100%">Large Container</Container>
      <Container w="100%">Large Container</Container>
    </VStack>
  );
};