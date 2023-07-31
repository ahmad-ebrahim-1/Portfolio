import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "../styles/card.css";



const Card = ({ title, description, imageSrc, url }) => {

  return (
    <VStack
      className="card"
      alignItems="flex-start"
      color="#000"
      backgroundColor="#fff"
      borderRadius="md"
    >
      <Image className="img" src={imageSrc} height="full" borderRadius="md" />
      <VStack alignItems="flex-start" padding="3">
        <Heading marginLeft="6px" size="xl" fontWeight="500">{title}</Heading>
        <Text padding="6px" fontSize="19px" opacity=".7">{description}</Text>
        <a className="btn" href={url}>Visit site</a>
      </VStack>
    </VStack>
  );
};

export default Card;
