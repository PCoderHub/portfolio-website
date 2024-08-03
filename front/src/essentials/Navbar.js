import { AppBar, Avatar, Fade, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from './Pages';
import myPic from './passportpic.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const [value, setValue] = useState(null);
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);
    const navigate = useNavigate();

    const handleClick = (e) => {
        setAnchor(e.currentTarget);
    }

    const handleClose = (link) => {
        setAnchor(null);
        navigate(link);
    }

    const goLanding = () => {
        navigate('/');
        setValue(null);
    }

    const handleNav = (link) => {
        navigate(link);
    }

  return (
    <>
    <AppBar sx={{backgroundColor: '#535b62'}}>
        <Toolbar>
            <IconButton size='large' onClick={goLanding}>
                <Avatar alt='Pooja pic' src={myPic}/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}} >Discover Me!</Typography>
            <Tabs sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex'}}} 
            textColor='#ffffff' 
            value={value} 
            indicatorColor='secondary' 
            onChange={(e, value) => setValue(value)}
            >
                {pages.map((item) => <Tab label={item.title} onClick={() => handleNav(item.link)} />)}
            </Tabs>
            <>
            <IconButton 
            id='menu-button'
            size='large' 
            edge='start' 
            color='inherit' 
            aria-controls={open ? 'menu-list' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            sx={{display: { xs: 'flex', md: 'none'}}}
            onClick={handleClick}
            >
                <MenuIcon/>
            </IconButton>
            <Menu 
            id='menu-list'
            MenuListProps={{
                'aria-labelledby': 'menu-button',
            }}
            anchorEl={anchor}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            >
                {pages.map((item) => <MenuItem onClick={() => handleClose(item.link)}>{item.title}</MenuItem>)}
            </Menu>
            </>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar;