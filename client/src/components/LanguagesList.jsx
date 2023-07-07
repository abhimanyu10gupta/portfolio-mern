import React from 'react'
import { Box } from '@mui/material';
import LanguageItem from './LanguageItem';

function LanguagesList() {
    const languages = ["JavaScript", "TypeScript", "Python", "Java", "C"];

  return (
    <Box height="80%" display="flex" flexDirection={"column"} gap="1.5rem" alignItems={"center"}>
        <Box>
            Languages
        </Box>
        <Box display="flex" flexDirection="column" justifyContent={"space-around"} flex = "1">
            {languages.map((language)=> (
                <LanguageItem label={language} />
            ))}
        </Box>
    </Box>
    
  )
}

export default LanguagesList