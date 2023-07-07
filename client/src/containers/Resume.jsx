import React from 'react'
import { Box, Typography,useTheme, useMediaQuery } from '@mui/material'
import pdfResume from '../resources/AabhimanyuGupta_resume.pdf'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {Button, } from '@mui/material';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const { palette } = useTheme();
    const green = palette.neutral.main;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
      function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }
    
      function previousPage() {
        changePage(-1);
      }
    
      function nextPage() {
        changePage(1);
      }
    
  return (
    <Box height="100vh" width="100vw" sx={{
        scrollSnapAlign: "center",
    }}>
        <Box paddingTop={"10rem"}>
            <Typography variant="h3" textAlign={"center"} >Resume</Typography>
        </Box>
        <Box display="flex" justifyContent="center" paddingTop={"2rem"} flexDirection={"column"} >
            <Box display="flex" justifyContent={"space-evenly"} paddingBottom="2rem">
                <Button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                Previous
                </Button>

                <Document
                    file={pdfResume}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} scale={isNonMobileScreens? 0.8: 0.5}/>
                </Document>
                        
                <Button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                Next
                </Button>
            </Box>
            <Button paddingTop="2rem">
                Download
            </Button>
        </Box>
    </Box>
  )
}

export default Resume;