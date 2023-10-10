import React from "react";
import { Image, Heading, HStack, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/avatar.jpg";
import "../styles/landingSection.css";

const name = "Ahmad";
const greeting = "Hello, I am ";
const bio1 = "A Passionate Frontend Developer";
const bio2 = "Specialized in React.JS";

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="linear-gradient(45deg, rgb(34, 34, 34) 8.3%, rgb(0, 40, 60) 41.6%, rgb(0, 143, 213) 93.4%);"
      // backgroundColor="#2A4365"
    >
      <HStack spacing="124px">
        <VStack alignItems="flex-start" spacing={6}>
          <VStack alignItems="flex-start">
            <Heading id="about-section" fontWeight="normal" size="xl">
              {greeting}
            </Heading>
            <Heading className="text" fontSize="96px">
              {name}!
            </Heading>
          </VStack>
          <VStack alignItems="flex-start">
            <VStack alignItems="flex-start" spacing={4}>
              <Heading fontWeight="normal" size="2xl">
                {bio1}
              </Heading>
              <Heading fontWeight="normal" size="2xl">
                {bio2}
              </Heading>
            </VStack>
          </VStack>
        </VStack>
        <Image className="image" src={avatar} />
      </HStack>
    </FullScreenSection>
  );
};

export default LandingSection;
