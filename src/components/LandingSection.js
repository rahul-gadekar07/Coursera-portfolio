import React from "react";
import { Box, VStack, Text, Image } from "@chakra-ui/react";

const greeting = "Hello, I am Rahul!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => {
  return (
    <Box
      id="landing-section"
      height="100vh"
      backgroundColor="#1A202C"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      textAlign="center"
    >
      <VStack spacing={4}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://i.pravatar.cc/150?img=7"
          alt="Avatar"
        />
        <Text fontSize="2xl">{greeting}</Text>
        <Text fontSize="4xl" fontWeight="bold">{bio1}</Text>
        <Text fontSize="4xl" fontWeight="bold">{bio2}</Text>
      </VStack>
    </Box>
  );
};

export default LandingSection;
