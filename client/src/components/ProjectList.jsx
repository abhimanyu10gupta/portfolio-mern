import React from 'react'
import ProjectWidget from './ProjectWidget'
import { Box } from '@mui/material'
import {useMediaQuery} from '@mui/material';
import sociopediaThumb from '../resources/sociopedia.png'
import ecomThumb from '../resources/ecom.png'
import { useTheme } from '@emotion/react';
function ProjectList() {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const { palette } = useTheme();
    const bgColor = palette.primary.dark;
    const projects = [
        {
            title: "Sociopedia",
            picturePath: sociopediaThumb,
            stack: "MERN",
            url: "https://sociopedia-mern-41ra.onrender.com"
        },
        {
            title: "E-commerce",
            picturePath: ecomThumb,
            stack: "MERN",
            url: "https://ecom-mern-lq59.onrender.com",
        },
        // {
        //     title: "Whitsundays Week",
        //     picturePath:"asdjf",
        //     stack: "mern",
        // },
        // {
        //     title: "Sociopedia",
        //     picturePath:"asdjf",
        // },
    ]
  return (
    <Box boxShadow= "24" borderRadius= "0.75rem" bgColor={bgColor}
    mt={isNonMobile ? undefined : "2rem"} textAlign="center"
    sx={{
        display: "flex",
        padding: "25px",
        listStyle: "none",
        overflowX: "scroll",
        scrollSnapType: "x mandatory",
        backgroundColor: 'primary.light',
    }}
    >
        {projects.map((project, index)=> (
            <ProjectWidget key={index} title={project.title} picturePath={project.picturePath} stack={project.stack} url={project.url} />
        ))}
    </Box>
  )
}

export default ProjectList