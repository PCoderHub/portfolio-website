import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, Paper, Typography } from "@mui/material";
import { background, cwsAndCerts, personalStory, skills } from "../essentials/Text";
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";

function About() {

  const [open, setOpen] = useState(false);
  const [content, setContent] = useState([]);

  const handleClickOpen = (text) => () => {
    if(text === 'background') setContent(background);
    if(text === 'cwandcerts') setContent(cwsAndCerts);
    if(text === 'skills') setContent(skills);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setContent([]);
  }

  return (
    <Box 
    component='div' 
    sx={{ marginTop: '65px'}}
    >
      <Card 
      sx={{
        height: { xs: '100vh', md: '80vh'}, 
        display: 'flex', 
        flexDirection: 'column', 
        padding: '10px', 
        justifyContent: 'center', 
        alignItems: 'center'
        }}
        >
        <Typography 
        variant="h5" 
        textAlign='center' 
        fontStyle='italic' 
        fontWeight='bold' 
        sx={{fontSize: {md: '2rem', xs: '1.5rem'}}}
        >
          My Story
          </Typography>
        {personalStory.map((para) => {
          return(
            <Box 
            component='p' 
            width='90%' 
            textAlign='center' 
            sx={{ fontSize: {xs: '1rem', md: '1.25rem'}}}
            >
            {para}
            </Box>
          );
        })}
        <Paper 
        elevation={6} 
        sx={{ 
          width: '80%', 
          margin: '10px', 
          height: '100px', 
          display: 'flex', 
          flexDirection: {xs: 'column', md: 'row'}, 
          justifyContent: 'center'
          }}
          >
          <Button 
          sx={{
            margin: 'auto', 
            fontSize: {xs: '12px', md: '1rem'}
            }} 
          startIcon={<SchoolIcon/>} 
          onClick={handleClickOpen('background')}
          >
            Background
            </Button>
          <Button 
          sx={{
            margin: 'auto', 
            fontSize: {xs: '12px', md: '1rem'}
            }} 
          startIcon={<LibraryBooksIcon/>} 
          onClick={handleClickOpen('cwandcerts')}
          >
            Courseworks/Certifications
            </Button>
          <Button 
          sx={{
            margin: 'auto', 
            fontSize: {xs: '12px', md: '1rem'}
            }} 
          startIcon={<StarIcon/>} 
          onClick={handleClickOpen('skills')}
          >
            Skills
            </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <DialogContentText>
                <ul>
                {content.map(point => <li>{point}</li>)}
                </ul>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </Card>
    </Box>
  )
}

export default About;