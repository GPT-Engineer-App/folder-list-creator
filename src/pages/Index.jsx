import React from "react";
import { Container, VStack, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaFolder } from "react-icons/fa";

const folders = ["Documents", "Pictures", "Music", "Videos", "Downloads"];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Folder List</Text>
        <List spacing={3}>
          {folders.map((folder, index) => (
            <ListItem key={index}>
              <ListIcon as={FaFolder} color="blue.500" />
              {folder}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
