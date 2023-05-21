import { AppBar, Box, Button, IconButton, LinearProgress, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from "react";

const menuSettings = ['Profile', 'Logout'];

export default function NavigationBar() {

  const navigate = useNavigate();
  var experience:number = 2;

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" style={{ background: '#252525' }}>
        <Toolbar variant="regular">
        <Typography variant="h5" component="a" href="/" sx={{ '&:hover': {
    color: "#FFB800",
  },font:'inter', flexGrow: 0, color: 'white', fontWeight: 'bold'}}>
            Git
          </Typography>
          <Typography variant="h5" component="a" href="/" sx={{ '&:hover': {
    color: "white",
  },font:'inter', flexGrow: 0, color: '#FFB800', fontWeight: 'bold'}}>
            Code.
          </Typography>
          <Box sx={{m: 3}}/>
          <Button onClick={() => navigate('login')} sx={{color:'white'}}>Login</Button>
          <Button onClick={() => navigate('signup')} sx={{color:'white'}}>Sign Up</Button>
          <Box sx={{ flexGrow: 1}}>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleOutlinedIcon sx={{size: 'large',color: '#FFB800'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {menuSettings.map((menuSetting) => (
                <MenuItem key={menuSetting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{menuSetting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={experience} sx={{
                      backgroundColor: '#343434',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#31884F'
                      }
          }} />
        </Box>
      </AppBar>
    </Box>
    
  );
}