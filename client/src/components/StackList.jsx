import React from 'react'
import { Box } from '@mui/material';
import LanguageItem from './LanguageItem';

function StackList() {
    const languages = ["JavaScript", "TypeScript", "Python", "Java", "C"];

  return (
    <Box height="80%" >
        <Box paddingBottom={"4rem"}>
            Skills
        </Box >
        <Box display="flex" justifyContent={"space-around"} flex = "1">
            {languages.map((language)=> (
                <LanguageItem label={language} />
            ))}
        </Box>
    </Box>
    
  )
}

export default StackList