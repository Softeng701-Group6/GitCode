import React from "react";
import { 
    AppBar, 
    Box, 
    Button, 
    IconButton, 
    LinearProgress, 
    Menu, 
    MenuItem, 
    Toolbar, 
    Tooltip, 
    Typography 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import styles from "./NavigationBar.module.css";


const menuSettings = ["Profile", "Logout"];

export default function NavigationBar() {

  var experience:number = 2;

  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <Box className={styles.root}>
      <AppBar position="absolute" style={{ background: '#252525' }}>
        <Toolbar className={styles['toolbar']}>
          <Typography variant="h6" component="a" href="/levels" className={styles['title']} sx={{fontSize:32, fontWeight:'bold', py:4, paddingLeft:4}}>
            Git
          </Typography>
          <Typography variant="h6" component="a" href="/levels" className={styles['subTitle']} sx={{fontSize:32, fontWeight:'bold'}}>
            Code.
          </Typography>
          {/*<Box sx={{ m: 3 }} />
          <Button onClick={() => navigate('login')} className={styles['loginButton']}>Login</Button>
  <Button onClick={() => navigate('signup')} className={styles['signupButton']}>Sign Up</Button>*/}
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleOutlinedIcon className={styles['userIcon']} sx={{fontSize:48}}/>
              </IconButton>
            </Tooltip>
            <Menu
              className={styles['userMenu']}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {menuSettings.map((menuSetting) => (
                <MenuItem key={menuSetting} onClick={handleCloseUserMenu} className={styles['menuItem']}>
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
