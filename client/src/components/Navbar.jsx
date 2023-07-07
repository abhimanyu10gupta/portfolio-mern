import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import FlexBetween from './FlexBetween';
import { Button, IconButton, Menu, useTheme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

import Dialog from '@mui/material/Dialog';

import resume from '../resources/AabhimanyuGupta_resume.pdf';


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
       <iframe src={resume + "#view=Fit"} type="application/pdf" width={isNonMobile?"600px":"300px"} height={isNonMobile?"800px": "400px"}/>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function HideOnScroll(props) {
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {

  const {palette} = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [toggleDrawer, setToggleDrawer] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const handleToggleDrawer = () => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setToggleDrawer(!toggleDrawer);
    };

    const list = () => (
      <Box
        sx={{ width: 250,
          paddingTop: "2rem"
        }}
        role="presentation"
        onClick={handleToggleDrawer()}
        onKeyDown={handleToggleDrawer()}
      >
        <List>
          <ListItem sx={{
            justifyContent:"center"
          }}key={"logo"} >
          <Box sx={{
                  backgroundImage: "linear-gradient(#353535,  #353535, green 100%)",
                // paddingTop: "2rem",
            }}>
              <Typography sx={{
              }} variant="h6" component="div">
                              AG
              </Typography>
            </Box>
          </ListItem>
          {['Home', 'Projects'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton href={"#"+text.toLowerCase()}>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText sx={{
                  textAlign: "center"
                }}
                primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider variant="middle"/>
        <List>
          {['Resume'].map((text, index) => (
            <ListItem  key={text} disablePadding>
              <ListItemButton alignItems="center" onClick={handleClickOpen}>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText sx={{
                  textAlign: "center"
                }}primary={text} />
            <SimpleDialog
              open={open}
              onClose={handleClose}
            />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Box>
    );
  return (
      <HideOnScroll {...props}>
        <AppBar sx={{
          background: palette.background.default,
        }}>
          {isNonMobile && <Toolbar sx={{
              display: 'flex',
              justifyContent: 'space-between',
              
              // color:"transparent",
              // backgroundColor: palette.background.default
            }}>
              {/* <FlexBetween gap="3rem"> */}
                {/* <Button variant="text" color="neutral">Home</Button> */}
                {/* <Button variant="text" color="neutral">Projects</Button> */}
                {/* <Button variant="text" color="neutral">Resume</Button> */}
                {/* <Button variant="text" color="neutral">Contact</Button> */}

                {/* <Button varian="text" color="neutral">Resume</Button> */}

              {/* </FlexBetween> */}
              <Box sx={{
                  backgroundImage: "linear-gradient(#25251f,  #25251f, green 100%)",
                // paddingTop: "2rem",
            }}>
              <Typography variant="h6" component="div">
                              AG
              </Typography>
            </Box>
            <Box sx={{
              paddingLeft: "2rem"
            }}>
            {/* <Link to="#home"> */}
            <Button href="#home" variant="text" color="neutral">Home</Button>
            {/* </Link> */}
            {/* <Link to="#projects"> */}
            <Button href="#projects" variant="text" color="neutral">Projects</Button>
            {/* </Link> */}
            {/* <Switch>
              <Route path="#home" children={<Home />} />
              <Route path="#projects" children={<Projects />} />
            </Switch> */}
            </Box>
            <Box>
            <Button varian="text" color="neutral" onClick={handleClickOpen}>Resume</Button>
            <SimpleDialog
              open={open}
              onClose={handleClose}
            />
            </Box>
          </Toolbar>}
          {!isNonMobile && <Toolbar sx={{
              display: 'flex',
              justifyContent: 'space-between',
              }}
          >
            <Box sx={{
                  backgroundImage: "linear-gradient(#25251f,  #25251f, green 100%)",
                // paddingTop: "2rem",
            }}>
              <Typography variant="h6" component="div">
                              AG
              </Typography>
            </Box>
            <IconButton onClick={handleToggleDrawer()}>
              <MenuIcon />
              <SwipeableDrawer
                anchor='right'
                open={toggleDrawer}
                onClose={handleToggleDrawer()}
                onOpen={handleToggleDrawer()}
              >
                {list()}
              </SwipeableDrawer>
            </IconButton>

          </Toolbar>}
        </AppBar>
      </HideOnScroll>
  );
}