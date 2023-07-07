
  import { Box, Divider, IconButton, Paper, Typography, useMediaQuery, useTheme, Card } from "@mui/material";

  import WidgetWrapper from "./WidgetWrapper";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { Link } from "react-router-dom";
  const ProjectWidget = ({
    title,
    picturePath,
    stack,
    url,
  }) => {
    const dispatch = useDispatch();
    // const token = useSelector((state) => state.token);
    // const loggedInUserId = useSelector((state) => state.user._id);

  
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;

    const isNonMobile = useMediaQuery("(min-width:600px)");

    return (
      <Box m="2rem" flexBasis = "100%" 
        sx={{boxShadow:24,
        backgroundColor: 'background.default',
        borderRadius: "0.75rem",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        flex: isNonMobile? "0 0 calc(50% - 50px)" : "0 0 100%",
        padding: "20px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 15%)",
        scrollSnapAlign: "center",
        transition: "all 0.2s",
        justifyContent: "space-between",
        paddingBottom: "2rem"
        }}>
        <Link to={url} target="_blank" rel="noopener noreferrer">

        <Typography color={main} sx={{ mt: "1rem" }}>
          {title}
        </Typography>
        <Box>
        {picturePath && (
          <img
            src={picturePath}
            width="250rem"
            height="150rem"
            alt="post"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          />
        )}
        </Box>
        <Typography color={main} sx={{mt:"1rem"}}>
          {stack}
        </Typography>
        
        </Link>
      </Box>
      
    );
  };
  
  export default ProjectWidget;