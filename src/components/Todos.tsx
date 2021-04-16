import { Container, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { TodoList } from "./TodosList";

export const Todos: React.FC<{}> = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      bgColor="teal"
    >
      <Flex
        w="40%"
        h="80vh"
        bgColor="white"
        flexWrap="wrap"
        borderRadius="10px"
      >
        <Container
          w="100%"
          p="1em"
          bgColor="orange.400"
          justifyContent="center"
          display="flex"
        >
          <Heading isTruncated>To Do List</Heading>
        </Container>

        <TodoList />
      </Flex>
    </Flex>
  );
};
