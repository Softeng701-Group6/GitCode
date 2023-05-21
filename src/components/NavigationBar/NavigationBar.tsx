import { AppBar, Box, Button, IconButton, LinearProgress, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function NavigationBar() {

  const navigate = useNavigate();
  var experience:number = 2;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" style={{ background: '#252525' }}>
        <Toolbar variant="regular">
        <Typography variant="h5" component="a" href="/" sx={{ '&:hover': {
    color: "yellow",
  },font:'inter', flexGrow: 0, color: 'white', fontWeight: 'bold'}}>
            Git
          </Typography>
          <Typography variant="h5" component="a" href="/" sx={{ '&:hover': {
    color: "white",
  },font:'inter', flexGrow: 0, color: 'yellow', fontWeight: 'bold'}}>
            Code.
          </Typography>
          <Box sx={{m: 3}}/>
          <Button onClick={() => navigate('login')} sx={{color:'white'}}>Login</Button>
          <Button onClick={() => navigate('signup')} sx={{color:'white'}}>Sign Up</Button>
          <Box sx={{ flexGrow: 1}}>
          </Box>
          <IconButton sx={{color: 'yellow'}}>
            <AccountCircleOutlinedIcon/>
          </IconButton>
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