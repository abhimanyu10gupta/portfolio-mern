import React from 'react'
import { Box, Typography, useMediaQuery } from "@mui/material";
import LanguagesList from '../components/LanguagesList';
import StackList from '../components/StackList';
import ProjectList from '../components/ProjectList';

function Projects() {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <section id="projects">
    <Box height= "100vh" width="100vw" sx={{
      scrollSnapAlign: "center",
  }}>
      <Box paddingTop={"10rem"}>
        <Typography variant={"h3"} textAlign="center">Projects</Typography>
      </Box>
        <Box padding="2rem 6%"
          // display={isNonMobileScreens ? "flex" : "block"}
          // gap="2rem"
          fontFamily= "Copperplate"
          paddingTop={isNonMobileScreens? "10%" : "2%"}

          // width = "800px"
        >

                    <ProjectList />

    </Box>
  </Box>
  </section>

  )
}

export default Projects