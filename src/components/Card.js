import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white" // Ensure background is white
      color="black" // Set text color to black
    >
      <Image src={imageSrc} alt={title} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text
            fontSize="xl"
            fontWeight="bold"
            as="h2"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Text>
        </Box>

        <Box>
          <Text mt="2">{description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
