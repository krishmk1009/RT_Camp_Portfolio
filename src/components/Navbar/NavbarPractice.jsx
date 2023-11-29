import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:"white" , border:"none", shadow:"none"}}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src='https://rtcamp.com/wp-content/uploads/sites/2/2020/11/site-logo-black.svg' />

                    </IconButton>

                    <div >

                        <Button color="inherit">Case Studies</Button>
                        <Button color="inherit">Solution</Button>
                        <Button color="inherit">Careers</Button>
                        <Button color="inherit">About Us</Button>
                        <Button color="inherit">Blog</Button>
                        <Button color="inherit">Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
