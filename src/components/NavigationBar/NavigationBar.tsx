import React from "react";
import { AppBar, Box, Button, IconButton, LinearProgress, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './NavigationBar.css'; // Import the CSS file

const menuSettings = ['Profile', 'Logout'];

export default function NavigationBar() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  var experience:number = 2;
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box className="root">
      <AppBar position="absolute" style={{ background: '#252525'}}>
        <Toolbar className="toolbar">
          <Typography variant="h6" component="a" href="/" className="title">
            Git
          </Typography>
          <Typography variant="h6" component="a" href="/" className="subTitle">
            Code.
          </Typography>
          <Box sx={{ m: 3 }} />
          <Button onClick={() => navigate('login')} className="loginButton">Login</Button>
          <Button onClick={() => navigate('signup')} className="signupButton">Sign Up</Button>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleOutlinedIcon className="userIcon" />
              </IconButton>
            </Tooltip>
            <Menu
              className="userMenu"
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
                <MenuItem key={menuSetting} onClick={handleCloseUserMenu} className="menuItem">
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
