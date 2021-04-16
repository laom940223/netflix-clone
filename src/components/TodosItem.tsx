import { Container, Flex, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

import React from "react";

export const TodosItem: React.FC<{}> = () => {
  return (
    <Flex w="100%" flexWrap="wrap">
      <Text>Title of Todo</Text>

      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="sm"
        icon={<PhoneIcon />}
      />
    </Flex>
  );
};
