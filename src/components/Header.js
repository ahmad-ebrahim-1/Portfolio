import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import "../styles/header.css";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ahmadeb911@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ahmad-ebrahim-1",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ahmadibrahem/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@ahmadeb911",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21503193/ahmad-eb",
  },
];

const sections = [
  {
    name: "About",
    id: "about"
  },
  {
    name: "Projects",
    id: "projects",

  },
  {
    name: "Contact Me",
    id: "contactme",
  },
];

const Header = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll])

  const headerRef = useRef(null);

  useEffect(() => {
    const boxElement = headerRef.current;
    if (visible) {
      boxElement.style.transform = "translateY(0)";
    } else {
      boxElement.style.transform = "translateY(-200px)";
    }
  }, [visible])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      zIndex={1}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      // backgroundColor="#1b1b1b"
      backgroundColor="rgba(0, 0, 0, .75)"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) =>
                <a key={index} href={social.url} target="_blank">
                  <FontAwesomeIcon className={`social social-${index}`} icon={social.icon} size="2x" cursor="pointer" />
                </a>
              )}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {sections.map((section) =>
                <a className="section" key={section.id} onClick={handleClick(section.id)} style={{ fontSize: "20px", cursor: "pointer" }} >
                  {section.name}
                </a>
              )}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
