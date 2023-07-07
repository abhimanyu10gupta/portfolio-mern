import React from 'react'
import { Typography, Box, useTheme, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import SwipeMenu from './SwipeMenu';
import SimpleDialogDemo from './ResumeDialog'
function Home() {
    const { palette } = useTheme();
    const bgColor = palette.neutral.main;
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const socials ={
        "linkedin" : "https://www.linkedin.com/in/aabhimanyu-gupta/",
        "github" : "https://github.com/abhimanyu10gupta",
        "instagram" : "https://www.instagram.com/abhimanyu10gupta/",
        "facebook" : "https://www.facebook.com/abhimanyugupta.neo/"
    }

  return (
    <section id="home">
    <Box sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-evenly",
        alignItems: "center",
        scrollSnapAlign: "center",
    }}>
        <Box></Box>
        <Box sx = {{
            textAlign: "center",
            fontFamily: "Copperplate",

        }}>
            <Box sx={{
                  backgroundImage: "linear-gradient(#25251f,  #25251f, green 85%)",
                paddingTop: "2rem",
                marginLeft:isNonMobile? undefined: "2rem",
                marginRight: isNonMobile? undefined: "2rem",
            }}>
                <Typography fontFamily={'Copperplate'} fontWeight={"bold"} fontSize={isNonMobile? "60px": "30px"} color = {bgColor}>Aabhimanyu Gupta</Typography>
            </Box>
            <Box>
                <Typography fontSize={isNonMobile? "35px": "25px"} color={bgColor}>Software Developer</Typography>
            </Box>

        </Box>
        <Box>
            <Link to={socials["linkedin"]} target="_blank" rel="noopener noreferrer" > 
            <IconButton>
                <LinkedInIcon />
            </IconButton>
            </Link>
            <Link to= {socials["github"]} target="_blank" rel="noopener noreferrer" > 
            <IconButton >
                <GitHubIcon />
            </IconButton>
            </Link>
            <Link to= {socials["instagram"]}target="_blank" rel="noopener noreferrer" > 
            <IconButton >
                <InstagramIcon />
            </IconButton>
            </Link>
            <Link to= {socials["facebook"]} target="_blank" rel="noopener noreferrer" > 
                <IconButton >
            <FacebookTwoToneIcon />
            </IconButton>
            </Link>

        </Box>
        <Box>
        </Box>
        
    </Box>
    </section>
  )
}

export default Home