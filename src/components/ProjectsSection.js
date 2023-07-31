import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Assassin's Creed Gallery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia perferendis obcaecati architecto, vel, ea distinctio veritatis suscipit similique consequuntur soluta enim exercitationem mollitia culpa quod quam, itaque delectus a.",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "",
  },
  {
    title: "Music Player",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia perferendis obcaecati architecto, vel, ea distinctio veritatis suscipit similique consequuntur soluta enim exercitationem mollitia culpa quod quam, itaque delectus a.",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "",
  },
  {
    title: "Luxury Jewelry",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia perferendis obcaecati architecto, vel, ea distinctio veritatis suscipit similique consequuntur soluta enim exercitationem mollitia culpa quod quam, itaque delectus a.",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "",
  },
  {
    title: "Little Lemon",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia perferendis obcaecati architecto, vel, ea distinctio veritatis suscipit similique consequuntur soluta enim exercitationem mollitia culpa quod quam, itaque delectus a.",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: "",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="linear-gradient(125deg, rgb(34, 34, 34) 8.3%, rgb(0, 40, 60) 41.6%, rgb(0, 143, 213) 93.4%);"
      // backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={10}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
