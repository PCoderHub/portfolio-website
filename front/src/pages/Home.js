import { Box, Card, Typography } from '@mui/material';
import image from '../essentials/poojapic.jpg';
import { introduction } from '../essentials/Text';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <Card 
      sx={{
        top: {xs: '18%', md: '30%'}, 
        flexDirection: {xs: 'column', md: 'row'},
        justifyContent: { md: 'center', xs: 'none'},
        alignItems: {md: 'none', xs: 'center'},
        height: {xs: '100%', md: '60%'}
      }} 
      className='intro'
      >
        <Typography 
        component='p' 
        variant='h1' 
        fontFamily='monospace'
        sx={{ 
          display: {xs: 'none', md: 'flex'},
          }}
        >
          Hi,
        </Typography>
        <Box 
        component='p' 
        height={100}
        sx={{ 
          p: 2, 
          marginTop: {xs: '80px', md: '150px'}, 
          fontSize: {xs: '1rem', md: '1.5rem'}, 
          width: {xs: 300, md: 500}
        }}
        >
          {introduction.first}
        </Box>
        <Box 
        component='p' 
        height={100}
        sx={{ 
          p: 2, 
          marginTop: {xs: '5px', md: '150px'}, 
          fontSize: {xs: '1rem', md: '1.5rem'}, 
          width: {xs: 300, md: 500}
        }}
        >
          {introduction.second}
        </Box>
        <Box 
        component='p' 
        height={100}
        sx={{ 
          p: 2, 
          marginTop: {xs: '5px', md: '150px'}, 
          fontSize: {xs: '1rem', md: '1.5rem'}, 
          width: {xs: 300, md: 500}
        }}
        >
          {introduction.third}
        </Box>
      </Card>
      <Box 
      component='img' 
      src={image} 
      alt='Display picture' 
      sx={{ 
        width: {md: '300px', xs: '100px'}, 
        height: {md: '300px', xs: '100px'}, 
        borderRadius: '50%', 
        border: '5px solid white', 
        boxShadow: '2px 2px 2px 2px black'
        }}
      ></Box>
    </div>
  )
}

export default Home;
