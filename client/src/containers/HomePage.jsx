import React from 'react'
import Home from '../components/Home'
import Projects from './Projects'
import { Box, useTheme } from '@mui/material'
import Resume from './Resume'
import Contact from './Contact'
import Navbar from '../components/Navbar'

function HomePage() {
    const { palette } = useTheme();
    const bgColor = palette.primary.main
  return (
    <Box sx={{
        overflowY: "auto",
        overscrollBehaviorY: "y contain",
        scrollSnapType: "y mandatory",
        height:"100vh",
        width:"100%",
        scrollBehavior: "smooth",
        // color: {bgColor},
    }}>
        {/* <Navbar /> */}
        
        <Home id={"home"}/>
        <Projects id={"#projects"}/>
        {/* <Resume/> */}
        {/* <Contact /> */}
    </Box>
  )
}

export default HomePage